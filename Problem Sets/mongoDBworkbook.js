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


// Output just the names of the people who are 99 years old


// Output only the cats, like this: