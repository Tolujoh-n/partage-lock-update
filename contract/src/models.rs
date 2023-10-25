use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
#[allow(unused_imports)]
use near_sdk::{env, near_bindgen};
use near_sdk::serde::{Deserialize, Serialize};

use crate::utils::{
    AccountId,
    Timestamp
};

#[derive(Clone, Serialize, Deserialize, BorshDeserialize, BorshSerialize)]
#[serde(crate = "near_sdk::serde")]
#[derive(Debug)]

pub struct Booking {
    id: i32,
  pub creator: AccountId,
    created_at: Timestamp,
    name: String,
    nbr_days: u128,
    total_price: u128,
    description: String,
    pub password: String,
}


impl Booking {
    pub fn new(
        id:i32, 
        name: String, 
        nbr_days:u128, 
        total_price:u128, 
        description: String
    ) -> Self {
        Booking {
            id,
            creator: env::signer_account_id().to_string(),
            created_at: env::block_timestamp(),
            name,
            nbr_days,
            total_price,
            description,
            password: "tba".to_string(),
        }
    }
}

