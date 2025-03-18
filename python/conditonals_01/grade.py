# Assign a letter grade based on a student's score: A (90-100), B (80-89), C (70-79), D (60-69), F (below 60).

score = int(input("Enter a score to generatre Grade: "))


# if score in range(90,101):
#     print("Grade A")
# elif score in range(80,90):
#     print("Grade B")
# elif score in range(70,80):
#     print("Grade C")
# elif score in range(60,70):
#     print("Grade D")
# elif score < 60:
#     print("Grade F")
# else:
#     print("Please enter a valid score!")
if score > 100:
    print("Please verify your score again!")
    exit()

if score>=90:
    grade = "A"
if score>=80:
    grade = "B"
if score>=70:
    grade = "C"
if score>=60:
    grade = "D"
if score<=59:
    grade = "F"

print("your Grade is ",grade)