const civilAircrafts = [
    'assets/avion-civil-1.jpg',
    'assets/avion-civil-2.jpg',
    'assets/avion-civil-3.jpg',
    'assets/avion-civil-4.jpg',
    'assets/avion-civil-5.jpg'
];

const militaryAircrafts = [
    'assets/avion-militar-1.jpg',
    'assets/avion-militar-2.jpg',
    'assets/avion-militar-3.jpg',
    'assets/avion-militar-4.jpg',
    'assets/avion-militar-5.jpg'
];

const civilHelicopters = [
    'assets/helicoptero-civil-1.jpg',
    'assets/helicoptero-civil-2.jpg',
    'assets/helicoptero-civil-3.jpg',
    'assets/helicoptero-civil-4.jpg',
    'assets/helicoptero-civil-5.jpg'
];

const militaryHelicopter = [
    'assets/helicoptero-militar-1.jpg',
    'assets/helicoptero-militar-2.jpg',
    'assets/helicoptero-militar-3.jpg',
    'assets/helicoptero-militar-4.jpg',
    'assets/helicoptero-militar-5.jpg'
];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

class Gallery {
    constructor(civilImages, militaryImages) {
        this.civilImages = civilImages;
        this.militaryImages = militaryImages;
    }

    getRandomCivil(civilImages) {
        const randomImg = this.civilImages[getRandomInt(this.civilImages.length)];
        return randomImg
    }

    getRandomMilitary(militaryImages) {
        const randomImg = this.militaryImages[getRandomInt(this.militaryImages.length)];
        return randomImg
    }

    getAll(civilImages, militaryImages) {
        const all = this.civilImages.concat(this.militaryImages)
        return all
    }
}

class Painter {
    constructor() {

    }

    createGallery() {
        const section = document.createElement("section");
        section.setAttribute("id", "Gallery");
        const body = document.getElementsByTagName("body")[0];
        body.appendChild(section);
        this.gallery = document.getElementById("Gallery");
    }

    createImageTag(imageUrl) {
        const imgTag = document.createElement("img");
        imgTag.setAttribute("src", imageUrl);
        imgTag.setAttribute("class", "imagen");
        this.gallery.appendChild(imgTag);
    }

    paintSingleImage(imageUrl) {
        if (!this.gallery) {
            this.createGallery();
        }
        this.createImageTag(imageUrl);
    }

    paintMultipleImages(arrayOfImages) {
        
        if (!this.gallery) {
            this.createGallery();
        }
        arrayOfImages.forEach(image =>{
            this.createImageTag(image);
        })
        

    }
}

const aircrafts = new Gallery(civilAircrafts, militaryAircrafts);
const helicopters = new Gallery(civilHelicopters, militaryHelicopter);
const painter = new Painter();
