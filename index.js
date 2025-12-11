const movies = [
    { id: 1, title: "Blade Runner", img: "images/blade runner.jpg", date: "1982-06-25", actors: "Harrison Ford, Rutger Hauer, Sean Young", desc: "In a smog-choked dystopian Los Angeles, a burnt-out cop is forced to hunt down four fugitive synthetic humans who have returned to Earth seeking their creator to extend their short lifespans." },
    { id: 2, title: "Dark Knight", img: "images/dark-knight.jpg", date: "2008-07-18", actors: "Christian Bale, Heath Ledger, Aaron Eckhart", desc: "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and DA Harvey Dent, he sets out to dismantle the remaining criminal organizations that plague the city streets." },
    { id: 3, title: "Inception", img: "images/inception.jpg", date: "2010-07-16", actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page", desc: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project." },
    { id: 4, title: "Interstellar", img: "images/interstellar.jpg", date: "2014-11-07", actors: "Matthew McConaughey, Anne Hathaway, Jessica Chastain", desc: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival as Earth faces a global crop blight and second Dust Bowl." },
    { id: 5, title: "Lightyear", img: "images/lightyear.jpg", date: "2022-06-17", actors: "Chris Evans, Keke Palmer, Peter Sohn", desc: "Space Ranger Buzz Lightyear attempts to escape a hostile planet with his crew, only to be joined by a group of ambitious recruits and a robot cat to fight the Zurg threat." },
    { id: 6, title: "LOTR", img: "images/lotr.jpg", date: "2001-12-19", actors: "Elijah Wood, Ian McKellen, Orlando Bloom", desc: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron." },
    { id: 7, title: "Mad Max", img: "images/madmax.jpg", date: "2015-05-15", actors: "Tom Hardy, Charlize Theron, Nicholas Hoult", desc: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max." },
    { id: 8, title: "Matrix", img: "images/matrix.jpg", date: "1999-03-31", actors: "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss", desc: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers." },
    { id: 9, title: "Oldboy", img: "images/oldboy.jpg", date: "2003-11-21", actors: "Choi Min-sik, Yoo Ji-tae, Kang Hye-jung", desc: "After being kidnapped and imprisoned for fifteen years, Oh Dae-Su is released, only to find that he must find his captor in five days." },
    { id: 10, title: "Parasite", img: "images/parasite.png", date: "2019-05-30", actors: "Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong", desc: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan." },
    { id: 11, title: "Project Power", img: "images/project.jpg", date: "2020-08-14", actors: "Jamie Foxx, Joseph Gordon-Levitt, Dominique Fishback", desc: "A former soldier, a teen, and a cop collide in New Orleans as they hunt for the source behind a dangerous new pill that grants users temporary superpowers." },
    { id: 12, title: "Pulp Fiction", img: "images/pulpfiction.jpg", date: "1994-10-14", actors: "John Travolta, Uma Thurman, Samuel L. Jackson", desc: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption." },
    { id: 13, title: "Se7en", img: "images/seven.jpg", date: "1995-09-22", actors: "Brad Pitt, Morgan Freeman, Kevin Spacey", desc: "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives." },
    { id: 14, title: "Shawshank", img: "images/shawshank redemption.jpg", date: "1994-09-23", actors: "Tim Robbins, Morgan Freeman, Bob Gunton", desc: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency." },
    { id: 15, title: "Spirited Away", img: "images/Spirited_Away_Japanese_poster.png", date: "2001-07-20", actors: "Rumi Hiiragi, Miyu Irino, Mari Natsuki", desc: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts." },
    { id: 16, title: "There Will Be Blood", img: "images/There_Will_Be_Blood_Poster.jpg", date: "2007-12-26", actors: "Daniel Day-Lewis, Paul Dano, Ciarán Hinds", desc: "A story of family, religion, hatred, oil and madness, focusing on a turn-of-the-century prospector in the early days of the business." },
    { id: 17, title: "Whiplash", img: "images/whiplash.jpg", date: "2014-10-10", actors: "Miles Teller, J.K. Simmons, Paul Reiser", desc: "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential." },
    { id: 18, title: "You Don't Mess With Zohan", img: "images/you dont.jpg", date: "2008-06-06", actors: "Adam Sandler, John Turturro, Emmanuelle Chriqui", desc: "An Israeli Special Forces Soldier fakes his death so that he can re-emerge in New York City as a hair stylist." }
];

if (document.getElementById("movie-grid")) {
    const grid = document.getElementById("movie-grid");
    movies.forEach(m => {
        const div = document.createElement("div");
        div.className = "border-2 border-black p-2 hover:bg-black hover:text-white cursor-pointer transition-colors";
        div.innerHTML = `<img src="${m.img}" class="w-full h-48 object-cover border-b-2 border-black mb-2"><h3 class="font-bold uppercase">${m.title}</h3><p class="text-xs truncate">${m.desc}</p>`;
        div.onclick = () => window.location.href = `details.html?id=${m.id}`;
        grid.appendChild(div);
    });
} else {
    const id = new URLSearchParams(window.location.search).get("id");
    const m = movies.find(x => x.id == id);
    if (m) {
        document.getElementById("detail-container").innerHTML = `
            <div class="flex flex-col md:flex-row gap-8">
                <img src="${m.img}" class="w-full md:w-1/3 border-4 border-black h-auto object-cover grayscale">
                <div class="w-full md:w-2/3">
                    <h2 class="text-5xl font-bold uppercase mb-4">${m.title}</h2>
                    <p class="text-xl leading-relaxed">
                        ${m.date}<br>
                        ACTORS<br>
                        ${m.actors}<br>
                        ${m.desc}
                    </p>
                </div>
            </div>
        `;
    }
}