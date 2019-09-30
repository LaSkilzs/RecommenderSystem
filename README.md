# RecommenderSystem

Broadway Roulette Technical Take Home

We want to be able to recommend shows to customers. A simple way to do that is to identify how often two shows are favorited by the same customer. From there, if a new customer likes one show in the pair, we can recommend the other. Your input is a list of existing customer’s favorite shows, which are represented by a comma-separated list of show names. Write an algorithm that prints each pair of shows that appear in at least 5 customer’s favorites list together (we can pretend this is a form of statistical significance).

Input Format

Each line represents a customer’s favorites list formatted as a comma-separated list of show names,. (show names will never contain a comma, so you don't have to worry about parsing "real" CSV.)

Output Format

Print out pairs of show names, separated by a comma, that appeared together on at least 5 different customers favorites list in the input. A pair should be listed exactly once, and the lesser (in alphabetical order) of the two names should appear first.

Submit your solution in the language of your choice (JavaScript preferable) with instructions on how to run your code if necessary via a Github gist link.

Sample Input
Betrayal, Mean Girls, Oklahoma!, Phantom of the Opera, Seawall
Chicago, Hamilton, Mean Girls, Oklahoma!
Come From Away, Oklahoma!, Phantom of the Opera, Seawall
Chicago, Mean Girls, Moulin Rouge, Oklahoma!, Seawall
Hadestown, Mean Girls, Oklahoma!
Great Society, Frozen, Mean Girls, Oklahoma!

Sample Output
Mean Girls, Oklahoma!

Extra/Optional (A few sentences is enough!)

We want to run an AB test on whether adding an animated arrow to our checkout button is “better”. We have a base case which is our site now, and a test case with animated arrows pointing towards the checkout button. What are some metrics we could test for and their importance? One example is we could test which option leads to more orders.
