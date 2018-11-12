# VirtuStream
Fibonnaci series Node js App
 #FibonacciSeries A RESTful web service that:

 It accepts the number n, as input and returns the first n Fibonacci numbers, starting from 0. (i.e. given n = 5, the output would be the sequence "0 1 1 2 3")
The service returns the values as a String in a new web page.
Given a negative number, it responds with an error message "Error! Only positive numbers accepted".
There are unit tests that indicate the output is correct.
It is my first attempt at a RESTful web service, it was DESIGNED as if I have to put it into production and maintain it for a significant period of time.

Build/Deployment Instructions
This section includes the instructions necessary to build and have the web service accepting requests and responding to them.

1) first we need to have Java installed on our system .
2) Also the project is written in java script using Nodejs we need to Node installed in our system.
3)To run this code we need to have runtime enviornment for this project for which we have to install "npm"

To deploy this project I have created Playbook.yml which will create enviornment for this project .
Once enviornment is created we can access it :
http://localhost:3000
We can get the results by entering the choice number in the address bar.
for n= 50  http://localhost:3000/50
