## Airline Backend System

## Objective:

We need to build a backend system that can support different features for an online company . Our end user is going to be someone who wants to book flight and query about flights so we need a robust system to actually help them give the best experience possible .This doc is solely going to focus one the backend part of the system. We want to prepare the whole backend keeping the fact in mind that the code base should be as maintainable as possible.

## Requirements:

- A user should be able to search the flight from one place to another.

  - User should be able to mention the source and destination details.
  - User should be able to select the date of the journey.
    - [v2] User should be able to earch for return flights , return to different city , multi city flights.
  - User should be able to select the class of flights [ Not mandatory ]
  - User should be able to select the no of seats they want to book [not mandatory]
  - Now based on the above date , we will list down the flights
  - We should show our users the best available flights at the top based on time period of flights and the based on the price.
  - We need to support pagination show that we can list chunk of flights at one point of the time
  - We should support fliter of flights based on price , departure time , duration

    - [v2] more filter based on etc.

    \

- A user should be able to book a flight considering that users is registered on the platform.
  - User should be able to cancel a booking , and then based on some criteria we can initiate a refund for them
  - User should be able to request and book excess luggage for evry flight
- For making a booking user has to make a payment [ dummy ] .
- Tracking flight prices should be possible , the user should be notified about any price drops or any delays
- User should be able to list their previous and upcoming flights
- User should be able to download boarding pass if they have done online check in
- Online check in mechanism should be supported
- Notification via email for completing online check in before 3 hour of departure
- Notification to users about any flight delay
- Users should be able to review the flight journey if and only if they have a booked a flight
  - Review mechanism should involve star rating along with a comment
  - While listing any flight we should also display the review of the flight
- User should be able to authenticate to our system using email and password
  - [v2] Support ticketing , where user can raise their queries.
- Listing FAQ which will be static data
  - [v2] prepare seat selection
- Coupon for discount and offers
