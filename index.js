const M = [
    { id: 1, tt: "Blade Runner", im: "images/blade runner.jpg", dt: "1982-06-25", ac: "Harrison Ford, Rutger Hauer, Sean Young", ds: "In a smog-choked dystopian Los Angeles, a burnt-out cop is forced to hunt down four fugitive synthetic humans who have returned to Earth seeking their creator to extend their short lifespans." },
    { id: 2, tt: "Dark Knight", im: "images/dark-knight.jpg", dt: "2008-07-18", ac: "Christian Bale, Heath Ledger, Aaron Eckhart", ds: "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and DA Harvey Dent, he sets out to dismantle the remaining criminal organizations that plague the city streets." },
    { id: 3, tt: "Inception", im: "images/inception.jpg", dt: "2010-07-16", ac: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page", ds: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project." },
    { id: 4, tt: "Interstellar", im: "images/interstellar.jpg", dt: "2014-11-07", ac: "Matthew McConaughey, Anne Hathaway, Jessica Chastain", ds: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival as Earth faces a global crop blight and second Dust Bowl." },
    { id: 5, tt: "Lightyear", im: "images/lightyear.jpg", dt: "2022-06-17", ac: "Chris Evans, Keke Palmer, Peter Sohn", ds: "Space Ranger Buzz Lightyear attempts to escape a hostile planet with his crew, only to be joined by a group of ambitious recruits and a robot cat to fight the Zurg threat." },
    { id: 6, tt: "LOTR", im: "images/lotr.jpg", dt: "2001-12-19", ac: "Elijah Wood, Ian McKellen, Orlando Bloom", ds: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron." },
    { id: 7, tt: "Mad Max", im: "images/madmax.jpg", dt: "2015-05-15", ac: "Tom Hardy, Charlize Theron, Nicholas Hoult", ds: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max." },
    { id: 8, tt: "Matrix", im: "images/matrix.jpg", dt: "1999-03-31", ac: "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss", ds: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers." },
    { id: 9, tt: "Oldboy", im: "images/oldboy.jpg", dt: "2003-11-21", ac: "Choi Min-sik, Yoo Ji-tae, Kang Hye-jung", ds: "After being kidnapped and imprisoned for fifteen years, Oh Dae-Su is released, only to find that he must find his captor in five days." },
    { id: 10, tt: "Parasite", im: "images/parasite.png", dt: "2019-05-30", ac: "Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong", ds: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan." },
    { id: 11, tt: "Project Power", im: "images/project.jpg", dt: "2020-08-14", ac: "Jamie Foxx, Joseph Gordon-Levitt, Dominique Fishback", ds: "A former soldier, a teen, and a cop collide in New Orleans as they hunt for the source behind a dangerous new pill that grants users temporary superpowers." },
    { id: 12, tt: "Pulp Fiction", im: "images/pulpfiction.jpg", dt: "1994-10-14", ac: "John Travolta, Uma Thurman, Samuel L. Jackson", ds: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption." },
    { id: 13, tt: "Se7en", im: "images/seven.jpg", dt: "1995-09-22", ac: "Brad Pitt, Morgan Freeman, Kevin Spacey", ds: "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives." },
    { id: 14, tt: "Shawshank", im: "images/shawshank redemption.jpg", dt: "1994-09-23", ac: "Tim Robbins, Morgan Freeman, Bob Gunton", ds: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency." },
    { id: 15, tt: "Spirited Away", im: "images/Spirited_Away_Japanese_poster.png", dt: "2001-07-20", ac: "Rumi Hiiragi, Miyu Irino, Mari Natsuki", ds: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts." },
    { id: 16, tt: "There Will Be Blood", im: "images/There_Will_Be_Blood_Poster.jpg", dt: "2007-12-26", ac: "Daniel Day-Lewis, Paul Dano, Ciarán Hinds", ds: "A story of family, religion, hatred, oil and madness, focusing on a turn-of-the-century prospector in the early days of the business." },
    { id: 17, tt: "Whiplash", im: "images/whiplash.jpg", dt: "2014-10-10", ac: "Miles Teller, J.K. Simmons, Paul Reiser", ds: "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential." },
    { id: 18, tt: "You Don't Mess With Zohan", im: "https://wsrv.nl/?url=image.tmdb.org/t/p/original/k7eYdWqY7CJjC1J95eJ7z7F0j9.jpg", dt: "2008-06-06", ac: "Adam Sandler, John Turturro, Emmanuelle Chriqui", ds: "An Israeli Special Forces Soldier fakes his death so that he can re-emerge in New York City as a hair stylist." }
];
document.addEventListener('DOMContentLoaded', () => {
    hl();
    const g = document.getElementById("g");
    const d = document.getElementById("d");
if (g) {
        M.forEach(x => {
            const e = document.createElement("div");
            e.className = "border-2 border-black p-2 hover:bg-black hover:text-white cursor-pointer transition-colors";
            e.innerHTML = `<img src="${x.im}" class="w-full h-48 object-cover border-b-2 border-black mb-2"><h3 class="font-bold uppercase">${x.tt}</h3><p class="text-xs truncate">${x.ds}</p>`;
            e.addEventListener('click', () => location.href = `details.html?id=${x.id}`);
            g.appendChild(e);
        });

    } else if (d) {
        const p = new URLSearchParams(location.search);
        const x = M.find(i => i.id == p.get("id"));
        
        if (x) {
            d.innerHTML = `
                <div class="flex flex-col md:flex-row gap-8">
                    <img src="${x.im}" class="w-full md:w-1/3 border-4 border-black h-auto object-cover grayscale">
                    <div class="w-full md:w-2/3">
                        <h2 class="text-5xl font-bold uppercase mb-4">${x.tt}</h2>
                        <p class="text-xl leading-relaxed">
                            ${x.dt}<br>
                            ACTORS<br>
                            ${x.ac}<br>
                            ${x.ds}
                        </p></div></div>`;}}
});
function hl() {
    const ls = document.querySelectorAll('nav a');
    const lc = location.pathname;
    ls.forEach(l => {
        if ((l.href.includes("index") && (lc.includes("index") || lc === "/")) || (l.href.includes("details") && lc.includes("details"))) {
             l.classList.add("underline", "decoration-4");
        } else {
             l.classList.remove("underline", "decoration-4");
        }});
}