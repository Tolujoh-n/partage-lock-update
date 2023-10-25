// partage-lock is a blockchain-controlled smart lock.
// it aims to provide utility owners with a device bridging digital and physical worlds for them to control users' access to vaulted utilities.
// a user will send a payment to a smart contract, which will generate a random password which will be sent secretly on the user email.
// the user will type that password on the keypad of the lock to access the locked utility.
// author: Julien Carbonnell @JCarbonnell for Partage @partage.btc
// all rights goes to CivicTech OÜ.

mod models;
mod utils;

use crate::{
    utils::{
        AccountId,
    },
    models::{
        Booking
    }
};

use std::convert::TryInto;

use near_sdk::{borsh::{self, BorshDeserialize, BorshSerialize}};
#[allow(unused_imports)]
use near_sdk::{env, PromiseIndex, Promise, near_bindgen};

near_sdk::setup_alloc!();


#[near_bindgen]
#[derive(Clone, Default, BorshDeserialize, BorshSerialize)]

pub struct Contract {
    owner: AccountId,
    bookings: Vec<Booking>,
}

#[near_bindgen]
impl Contract{
    #[init]
    // creating a new contract
    pub fn new(
        owner: AccountId,
    ) -> Self{
        // creating a new booking vector within the contract struct
        let bookings: Vec<Booking> = Vec::new();
        Contract{
            owner,
            bookings
        }
    }

    pub fn add_booking(
        &mut self, 
        name: String, 
        nbr_days: u128, 
        total_price: u128, 
        description: String,
    ) {
        // initiate a booking id
        let id = self.bookings.len() as i32;
        // transfer payment to the owner of the contract
        let current = env::current_account_id();
        Promise::new(current).transfer(total_price);
        // create new booking on-chain with frontend data
        self.bookings.push(Booking::new(
            id,
            name,
            nbr_days,
            total_price,
            description,
        ));
        self.add_password(id.try_into().unwrap());
        env::log("Added a new booking!".as_bytes());
    }

    pub fn list_bookings(&self) -> Vec<Booking> {
        let bookings = &self.bookings;
       return bookings.to_vec();
    }

    pub fn booking_count(&mut self) -> usize {
        return self.bookings.len();
    }

    fn add_password(&mut self, id:usize){
        // get the booking
        let booking: &mut Booking = self.bookings.get_mut(id).unwrap();
        // replace the password in the booking
        booking.password = "hashed".to_string();
        env::log("Password added successfully to the booking!".as_bytes());
    }

    pub fn get_password(&mut self, id:usize) -> String {
        let booking: &mut Booking = self.bookings.get_mut(id).unwrap();
        return booking.password.to_string();

    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use near_sdk::test_utils::VMContextBuilder;
    use near_sdk::{testing_env, AccountId};
    fn get_context(predecessor: AccountId) -> VMContextBuilder {
        let mut builder = VMContextBuilder::new();
        builder.predecessor_account_id(predecessor);
        builder
    }

    #[test]
    fn test_add_booking() {
        let alice = AccountId::new_unchecked("alice.testnet".to_string());
        // Set up the testing context and unit test environment
        let context = get_context(alice.clone());
        testing_env!(context.build());
        let mut contract = Contract::new(alice.to_string());
        contract.add_booking("alice".to_string(), 6, 60, "I am booking the flat from March 20th to 26th. Everybody OK with it?".to_string());
        let result = contract.booking_count();
        assert_eq!(result, 1);
    }
}