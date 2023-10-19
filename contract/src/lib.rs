// partage-lock is a blockchain-controlled smart lock.
// it aims to provide utility owners with a device bridging digital and physical worlds for them to control users' access to vaulted utilities.
// a user will send a payment to a smart contract, which will generate a random password which will be sent secretly on the user email.
// the user will type that password on the keypad of the lock to access the locked utility.
// author: Julien Carbonnell @JCarbonnell for Partage @partage.btc
// all rights goes to CivicTech OÜ.

mod utils;
mod models;
use crate ::{
    utils::{
        AccountId,
    },
    models::{
        Booking
    }
};

use std::convert::TryInto;
use std::borrow::Borrow;
use std::ptr::null;
use std::str;

use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
use near_sdk::serde::Serialize;
use near_sdk::{env, log, Balance, Promise, PromiseIndex, near_bindgen};
// the id of the account that calls the method
use near_sdk::env::predecessor_account_id;
// the id of the account that owns the contract (lock owner)
use near_sdk::env::current_account_id;
use near_sdk::env::attached_deposit;
use near_sdk::env::random_seed;
use near_sdk::env::{storage_write, storage_read};

near_sdk::setup_alloc!();

use rand::rngs::StdRng;
use rand::{Rng, SeedableRng};
use pwhash::bcrypt;
use pwhash::unix;

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
    ) -> Self {
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
        password: String
    )  {
        // initiate a booking id
        let id = self.bookings.len() as i32;
        // transfer payment of the booking
        let buyer = env::predecessor_account_id();
        let payment: Balance = total_price;
        Promise::new(buyer.clone()).transfer(payment);
        println!("Thank you! you just sent {}.", total_price);
        // generate random 4-digit password
        let seed: [u8; 32] = env::random_seed().try_into().unwrap();
        let mut rng: StdRng = SeedableRng::from_seed(seed);
        let pwd = rng.gen_range(1000..9999);
        println!("Generated password: {}", pwd);
        // hash password
        let hashed = bcrypt::hash(pwd.to_string()).unwrap();
        // verify that the hashed password matches the password
        assert_eq!(bcrypt::verify(pwd.to_string(), &hashed), true);
        println!("Hashed password: {}", hashed);
        // push hashed password in the booking data
        let password = String::from(&hashed);
        env::log("Hashed password stored in the booking data!".as_bytes());
        // create the new booking from frontend data
        self.bookings.push(Booking::new(
            id,
            name,
            nbr_days,
            total_price,
            description,
            password
        ));
        env::log("New booking created!".as_bytes());
    }

    pub fn list_bookings(&self) -> Vec<Booking> {
        let bookings = &self.bookings;
        return bookings.to_vec();
    }

    pub fn booking_count(&mut self) -> usize {
        return self.bookings.len();
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
        let apoline = AccountId::new_unchecked("apoline.testnet".to_string());
        let owner = env::current_account_id();
        // Set up the testing context and unit test environment
        let context = get_context(apoline.borrow().clone());
        testing_env!(context.build());
        let mut contract = Contract::new(owner.to_string());
        contract.add_booking("Apoline".to_string(), 6, 600, "Hey it's me Apo, I would like to use the flat at my Easter holidays from March 20th to April 1st. Everybody OK with it?".to_string(), "".to_string());
        let result = contract.booking_count();
        assert_eq!(result, 1);
    }

}