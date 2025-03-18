# Suggest an activity based on the weather (e.g., Sunny - Go for a walk, Rainy - Read a book, Snowy - Build a snowman).

weather = input("Please enter weather (Sunny, Rainy, Snowy): ")

if weather!="":
    if weather == "Sunny":
        print("Weather is ",weather,", go for a walk.")
    elif weather == "Rainy":
        print("Weather is ",weather, "read a book.")
    elif weather == "Snowy":
        print("Weather is ",weather, "build a snowman.")
    else:
        print("Unidentified weather.")
else:
    print("Unidentified weather.")