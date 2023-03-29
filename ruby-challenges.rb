# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']
# ------Pseudo Code----------
# Input: array & string (letter)
# Output: array
# create a fucntion called arratWithLetters that has the parameters array,letter.
#  map through the array and then at each word split that and use select to filter out each word that does not contain the given letter
# create a conidtional statement stating if the given letter is not included within the value(current word in the array) dont return it.
# if we return the array as of right now it will be nested arrays so we must use the .flatten method to place all the word in sa single dimensional array.
def arrayWithLetters(array, letter)
    array.map do |word|
      word.split().select do |value|
        if value.include?(letter)
          word
        end
      end
    end.flatten
end
p arrayWithLetters(beverages_array,letter_o)
p arrayWithLetters(beverages_array,letter_t)
# Output--> ["coffee", "soda"]
#           ["tea", "water", "water"]

# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

# -----Pseudo Code-----
# input: hash
# Output: array
# create a function called sortedSingleArray that takes in a hash as an argument. and return only the values in the hash that are sorted alphabetically.
# at first glance this seems like a lot but in reality its very simple and we can thank all the built in methods that ruby provides :)
# first we need to use the .values method on our has which will only give the values inside the hash.
# we then call .flatten on our array of values from our hash to put them all inside the same array.
# lastly all we need to do is use .sort to sort them alphabetically.
def sortedSingleArray hash
 p hash.values.flatten.sort
end
sortedSingleArray(us_states)
# Output --> ["Arizona", "California", "Idaho", "Maine", "Nevada", "New Hampshire", "Oregon", "Rhode Island", "Washington"]

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

class Bike
  attr_accessor :model, :wheels, :current_speed
  
  def initialize(model, wheels = 2, current_speed = 0)
    @model = model
    @wheels = wheels
    @current_speed = current_speed
  end
  
  def bike_info
    "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph"
  end

  def pedal_faster(change)
     "Speed has been increased by #{change} mph. Your current speed is now #{@current_speed += change} mph"
  end

  def brake(change)
   "After slowing down by #{change} mph, your current speed is now #{@current_speed = [@current_speed - change, 0].max} mph"
  end
end

trek_bike = Bike.new("trek")
p trek_bike.bike_info

p trek_bike.pedal_faster(10)
p trek_bike.pedal_faster(18)

p trek_bike.brake(5)
p trek_bike.brake(25)

# OUTPUT--> 
# "The trek bike has 2 wheels and is going 0 mph"
# "Speed has been increased by 10 mph. Your current speed is now 10 mph"
# "Speed has been increased by 18 mph. Your current speed is now 28 mph"
# "After slowing down by 5 mph, your current speed is now 23 mph"
# "After slowing down by 25 mph, your current speed is now 0 mph"