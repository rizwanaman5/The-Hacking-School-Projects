// use petshop;
db.pets.insert({ name: "Mikey", species: "Gerbil" })
db.pets.insert({ name: "Davey Bungooligan", species: "Piranha" })
db.pets.insert({ name: "Suzy B", species: "Cat" })
db.pets.insert({ name: "Mikey", species: "Hotdog" })
db.pets.insert({ name: "Terrence", species: "Sausagedog" })
db.pets.insert({ name: "Philomena Jones", species: "Cat" })

// Add another piranha, and a naked mole rat called Henry.
db.pets.insert({ name: "Davey", species: "Piranha" })
db.pets.insert({ name: "Henry", species: "Naked mole rat" })

// Use find to list all the pets. Find the ID of Mikey the Gerbil.
db.pets.find({ name: "Mikey" }).pretty();

// Use find to find Mikey by id.
db.pets.find({ '_id': ObjectId("5d415050be96404f3a08dc04") }).pretty();

// Use find to find all the gerbils.
db.pets.find({ species: "Gerbil" }).pretty();

// Find all the creatures named Mikey.
db.pets.find({ name: "Mikey" }).pretty();

// Find all the creatures named Mikey who are gerbils.
db.pets.find({ name: "Mikey", species: "Gerbil" })

// Find all the creatures with the string "dog" in their species.
db.pets.find({ species: /dog/ }).pretty();

// use people
(function () {
    var names = [
        'Yolanda',
        'Iska',
        'Malone',
        'Frank',
        'Foxton',
        'Pirate',
        'Poppelhoffen',
        'Elbow',
        'Fluffy',
        'Paphat'
    ]
    var randName = function () {
        var n = names.length;
        return [
            names[Math.floor(Math.random() * n)],
            names[Math.floor(Math.random() * n)]
        ].join(' ');
    }
    var randAge = function (n) {
        return Math.floor(Math.random() * n);
    }
    for (var i = 0; i < 1000; ++i) {
        var person = {
            name: randName(),
            age: randAge(100)
        }
        if (Math.random() > 0.8) {
            person.cat = {
                name: randName(),
                age: randAge(18)
            }
        }
        db.people.insert(person);
    };
})();

// Use find to get all the people who are exactly 99 years old
db.people.find({ age: 99 }).pretty();

// Find all the people who are eligible for a bus pass (people older than 65)
db.people.find({ age: { $gt: 65 } }).pretty();

// Find all the teenagers, greater than 12 and less than 20.
db.people.find({ age: { $gt: 12, $lt: 20 } }).pretty();

// Find all the people with cats.
db.people.find({ cat: { $exists: true } }).pretty();

// Find all the pensioners with cats.
db.people.find({ age: { $gt: 65 }, cat: { $exists: true } }).pretty();

// Find all the teenagers with teenage cats.
db.people.find({
    cat: { $exists: true },
    $and: [{
        age: {
            $gt: 12,
            $lt: 20
        },
        "cat.age": {
            $gt: 12, $lt: 20
        }
    }]
})

// Use $where to find all the people who have a cat.
db.people.find({$where: "this.cat"})

// Find all the people who are younger than their cats. Remember, not everyone has a cat, so you will need to use a boolean && to filter out the non-cat owners.
db.people.find({$where: "this.cat && this.age < this.cat.age"});

// Does anyone have the same name as their cat? Re-run the insertion script to create more records until someone does.
db.people.find({$where: "this.name == this.cat.name"});

// Use projection to format your array of people. We want only the names.
db.people.find({}, {name: true});

// Output just the names of the people who are 99 years old
db.people.find({age: {$eq: 99}}, {name: true})

// Output only the cats, like this:
db.people.find({cat: {$exists: true}}, {cat: true}).pretty()

// List the cats. Remove the ids from the output.
db.people.find({cat: {$exists: true}}, {cat: true,_id:false})

// Find out how many people there are in total.
db.people.count();

// Using your collection of people, and $exists, tell me how many people have cats.
db.people.find({cat: {$exists: true}}).count();

// Use $where to count how many people have cats which are older than them.
db.people.find({$where: "this.cat && this.cat.age > this.age"}).count();

// Give me the first 5 people
db.people.find().limit(5);

// Give me the next 5 people
db.people.find().limit(5).skip(5);

// Give me the names and ages of the oldest 5 pensioners with piranhas
db.people.find({cat: {$exists: true}}).sort({age: -1})

// Give me the names and ages of the youngest 5 teenagers with cats, where the cats have the word "Yolanda" in their name. *****************************************


// Find the youngest 1 person with a cat and a piranha.
db.people.find({cat: {$exists: true}}).sort({age: 1}).limit(1)

// Give me just the name of the youngest 1 person with a cat and a piranha.
db.people.find({cat: {$exists: true}}, {name: true, _id: false}).sort({age: 1}).limit(1)

// Give me the 5 oldest cats
db.people.find({cat: {$exists: true}}, {'cat.name': true, 'cat.age': true}).sort({'cat.age': -1}).limit(5)

// Give me the next 5 oldest cats
db.people.find({cat: {$exists: true}}, {'cat.name': true, 'cat.age': true}).sort({'cat.age': -1}).limit(5).skip(5)

//Stocks
// Find me the top 10 most profitable stocks
db.stock.find({}, {"Sector": true, "Company": true, "Profit Margin": true}).sort({"Profit Margin": -1}).limit(10)

// Add a projection, tell me which sector the most profitable stocks are in.
db.stock.aggregate([{$group: {"_id":"$Sector", "average":{$avg:"$Profit Margin"}}}, {$sort: {"average": -1}}])

// Which is the least profitable sector.
db.stock.aggregate([{$group: {"_id":"$Sector", "average":{$avg:"$Profit Margin"}}}, {$sort: {"average": 1}}])

// Have a look at the data. Spend a few minutes deciding which stocks you would most like to invest in.


// Iterate over each of the people and output them.
db.people.find().forEach(function(i) {print(i)})

// change the find function to find only the people with cats.
db.people.find({cat: {$exists: true}}).forEach(function(i) {print(i)})

// Iterate over each of the people, outputting just the cat name and age each time.
db.people.find({cat: {$exists: true}}).forEach(function(i) {print(i.cat.name, i.cat.age)})

// Use Map to generate an array containing all of the cat names.
var array = db.people.find({cat: {$exists: true}}).map(function(person) {
    return person.cat.name;
  });
  print(array);

// Sort the stocks by profit
db.getCollection('stock').find({}).sort({"Profit Margin": -1})

// Now iterate over the cursor and output all of the stocks names and tickers in order of profit.
db.getCollection('stock').find({}).sort({"Profit Margin": -1}).forEach(function(i) {print(i.Company, i.Ticker)})

// A year has gone by. Write a loop that iterates over a cursor and makes everyone one year older.
db.people.find().forEach(function(x) {
    db.people.update({_id: x._id},{$inc: {'age': 1}})
    })

// Remember to make the cats older too. See if you can do both in the same loop.
db.people.find().forEach(function(x) {
    db.people.update({_id: x._id},{$inc: {'age': 1}})
    if ({$where: 'this.cat'}) {
        db.people.update({_id: x._id}, {$inc: {'cat.age': 1}})}
    })

// Use the people dataset. Match all the people who are 10 years old who have ten year old cats.


// Match all the people who are over 80 years old, and who's cats are over 15 years old.