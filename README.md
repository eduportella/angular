---
Title: Weather temperature
Description: Display the weather temperature for a location based on the users input
---

## Tips for success

* **Relax!** It’s okay if you get stuck. We're interested in how you think through problems with another person. Think out loud! Don't be afraid to ask questions - Your pairing partner is there to help.
* **Ask questions**. We want to understand how you think about and approach problems.
* **Write tests**. Quality is important to us, don’t forget to test your code as you
  go along.
* **Use the Internet!** We want to understand how you find and evaluate online information.
* **Give feedback**. We don’t just want you to succeed, we want you to have fun!

## Description

Write some code to display the weather temperature for a location based on the users input.

----------

1. Run `npm install` in order to install the required packages

2. Application architecture:
   1. Angular router module is used for navigation
   2. Reactive forms along with FormGroup directives are used in order to retrieve the users input
   3. Angular material is used as the main CSS and UX components framework

3. Please take the time to familiarize yourself with the application and ask any questions you may have.
Don't forget to write test cases as you go along.

5. Create a service in order to call the following API with the users input as the location

   ```text
    GET https://www.metaweather.com/api/location/search/?query=<location>
    ```  

6. Using the *woeid* property from the previous API response, call the following API to retrieve the temperature

   ```text
    GET https://www.metaweather.com/api/location/<woeid>
    ```
   
7. Display the temperature on the UI

