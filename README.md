---
title: Current weather
description: Display the current weather for a location based on the users input
---

## Tips for success

* **Relax!** It’s okay if you get stuck. We're interested in how you think through problems with another person. Think out loud! Don't be afraid to ask questions - Your pairing partner is there to help.
* **Ask questions**. We want to understand how you think about and approach problems.
* **Write tests**. Quality is important to us, don’t forget to test your code as you
  go along.
* **Use the Internet!** We want to understand how you find and evaluate online information.
* **Give feedback**. We don’t just want you to succeed, we want you to have fun!

## Description

Write some code to display the current weather for a location based on the users input.

----------

1. Create a form in order to receive a location input from the user. The location unit type can be one of the following (City|Region / State / Province|Country|Continent).
2. The form can request a general location or a specific unit type.
3. Call the following API with the users input

   ```text
    GET https://www.metaweather.com/api/location/search/?query=<location>
    ```  

4. Using the *woeid* property from the previous API response, call the following API to retrieve the current weather for the specified location

   ```text
    GET https://www.metaweather.com/api/location/<woeid>
    ```
   
5. Display the current temperature on the UI.

