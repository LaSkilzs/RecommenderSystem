Recommendation Algorithm PsuedoCode

1. input data via csv file
   1a. create a object of user favs
2. create object of unique movie titles and frequency
3. create catalog of all possible pairings in abc order based on pairings.
   3a. lower bound >= 5 frequency rate
   3b. use recursive factorial to create catalog
   1. start with highest frequency rate
4. identify users who favorited possible pairings
   4a. iterate through comparing each pairing to user favorites
   4b. count frequency of pairings
5. delete pairings <= 4
6. sort user list of possible listings by amount of users who favorited pairings
7. return pairings

space

1. HashMap of user favorites
2. Object of movie titles
3. Array of Arrays --- pairings
4. Object of favorited pairings
5. Array of top pairing

time

1. O(n) - hashmap
2. O(n) -- unique movie titles
3. O(n \* n) -- create possible pairings
4. O(n + n) -- compare pairings to favs
5. O(n \* log n) -- sort possiblle listings amount
