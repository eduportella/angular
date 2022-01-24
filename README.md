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

You are encouraged to use any CSS framework of your choosing or plain html syntax in order to complete this challenge.

----------

1. Create a form in order to receive a location input from the user. The form should contain the following fields:

   ```text
    1. Input text requesting the date in the following format yyyy/mm/dd
    2. Dropdown select field with the following cities
       1. Atlanta
       2. Seattle
       3. Alabama
       4. New York
    ```

2. Call the following API with the users input

   ```text
    GET https://www.metaweather.com/api/location/search/?query=<location>
    ```  

3. Using the *woeid* property from the previous API response and the *date* input, call the following API to retrieve the temperature

   ```text
    GET https://www.metaweather.com/api/location/<woeid>/<date>
    ```
   
4. Display the temperature on the UI.

