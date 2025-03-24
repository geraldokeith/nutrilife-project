const experts = [
    // Nutritionists (4)
    {
        id: 1,
        name: "Dr. Magezi Thomas",
        specialty: "Nutritionist",
        bio: "Expert in sustainable weight loss and dietary planning.",
        experience: "10 years",
        contact: "magezi@health.com",
        image: "images/1.webp",
        rating: 4.8
    },
    {
        id: 2,
        name: "Dr. Kalungi Edward",
        specialty: "Nutritionist",
        bio: "Specializes in plant-based nutrition and wellness.",
        experience: "8 years",
        contact: "kalungi@health.com",
        image: "images/3.webp",
        rating: 4.7
    },
    {
        id: 3,
        name: "Musinguzi John",
        specialty: "Nutritionist",
        bio: "Focuses on nutritional counseling for lifestyle changes.",
        experience: "12 years",
        contact: "musinguzi@health.com",
        image: "images/07.webp",
        rating: 4.9
    },
    {
        id: 4,
        name: "Dr. Gideon Alinaitwe",
        specialty: "Nutritionist",
        bio: "Expert in meal planning and nutritional education.",
        experience: "9 years",
        contact: "alinaitwe@health.com",
        image: "images/nutri1.webp",
        rating: 4.6
    },

    // Endocrinologists (4)
    {
        id: 5,
        name: "Dr. Michael Mugenyi",
        specialty: "Endocrinologist",
        bio: "Specializes in hormonal imbalances and diabetes management.",
        experience: "15 years",
        contact: "michael@health.com",
        image: "images/08.webp",
        rating: 4.9
    },
    {
        id: 6,
        name: "Dr. Okello Edward",
        specialty: "Endocrinologist",
        bio: "Focuses on thyroid disorders and metabolic health.",
        experience: "11 years",
        contact: "okello@health.com",
        image: "images/12.webp",
        rating: 4.8
    },
    {
        id: 7,
        name: "Dr. David Leonard",
        specialty: "Endocrinologist",
        bio: "Expert in pituitary and adrenal gland disorders.",
        experience: "13 years",
        contact: "david@health.com",
        image: "images/21.webp",
        rating: 4.7
    },
    {
        id: 8,
        name: "Dr. Susan Muhindo",
        specialty: "Endocrinologist",
        bio: "Specializes in reproductive endocrinology.",
        experience: "10 years",
        contact: "susan@health.com",
        image: "images/woman34.webp",
        rating: 4.8
    },

    // Cardiologists (4)
    {
        id: 9,
        name: "Dr. Mwanga Emily",
        specialty: "Cardiologist",
        bio: "Focuses on heart health and preventive cardiology.",
        experience: "8 years",
        contact: "emily@health.com",
        image: "images/45.webp",
        rating: 4.7
    },
    {
        id: 10,
        name: "Dr. James Hakim",
        specialty: "Cardiologist",
        bio: "Expert in cardiovascular disease prevention.",
        experience: "14 years",
        contact: "james@health.com",
        image: "images/71.webp",
        rating: 4.9
    },
    {
        id: 11,
        name: "Dr. Olivia Atwine",
        specialty: "Cardiologist",
        bio: "Specializes in heart rhythm disorders.",
        experience: "9 years",
        contact: "olivia@health.com",
        image: "images/19woman.webp",
        rating: 4.6
    },
    {
        id: 12,
        name: "Dr. Henry Kasolo",
        specialty: "Cardiologist",
        bio: "Focuses on interventional cardiology procedures.",
        experience: "16 years",
        contact: "henry@health.com",
        image: "images/55man.webp",
        rating: 4.8
    },

    // Clinical Nutritionists (4)
    {
        id: 13,
        name: "Dr. Lisa Kwagala",
        specialty: "Clinical Nutritionists",
        bio: "Specializes in medical nutrition therapy for chronic conditions.",
        experience: "12 years",
        contact: "lisa@health.com",
        image: "images/woman20.webp",
        rating: 4.8
    },
    {
        id: 14,
        name: "Dr. Mark Evans",
        specialty: "Clinical Nutritionists",
        bio: "Expert in nutrition for kidney disease management.",
        experience: "10 years",
        contact: "mark@health.com",
        image: "images/45.webp",
        rating: 4.7
    },
    {
        id: 15,
        name: "Dr. Rachel Kisakye",
        specialty: "Clinical Nutritionists",
        bio: "Focuses on nutritional support for cancer patients.",
        experience: "7 years",
        contact: "rachel@health.com",
        image: "images/woman5.webp",
        rating: 4.9
    },
    {
        id: 16,
        name: "Dr. Thomas Wafula",
        specialty: "Clinical Nutritionists",
        bio: "Specializes in nutrition for autoimmune disorders.",
        experience: "11 years",
        contact: "thomas@health.com",
        image: "images/man44.webp",
        rating: 4.6
    },

    // Sports Nutritionists 
    {
        id: 17,
        name: "Dr. Alex Mukulu",
        specialty: "Sports Nutritionists",
        bio: "Expert in optimizing athletic performance through nutrition.",
        experience: "9 years",
        contact: "alex@health.com",
        image: "images/man67.webp",
        rating: 4.8
    },
    {
        id: 18,
        name: "Dr. Natalie Ahabwe",
        specialty: "Sports Nutritionists",
        bio: "Focuses on endurance athlete nutrition plans.",
        experience: "6 years",
        contact: "natalie@health.com",
        image: "images/woman three.webp",
        rating: 4.7
    },
    {
        id: 19,
        name: "Dr. Chris Magezi",
        specialty: "Sports Nutritionists",
        bio: "Specializes in strength training nutrition.",
        experience: "13 years",
        contact: "chris@health.com",
        image: "images/woman34.webp",
        rating: 4.9
    },
    {
        id: 20,
        name: "Dr. Emma Basemera",
        specialty: "Sports Nutritionists",
        bio: "Expert in recovery nutrition for athletes.",
        experience: "8 years",
        contact: "emma@health.com",
        image: "images/woman5.webp",
        rating: 4.6
    },

    // Pediatric Nutritionists (4)
    {
        id: 21,
        name: "Dr. Julia Biira",
        specialty: "Pediatric Nutritionists",
        bio: "Focuses on children's nutritional needs and growth.",
        experience: "7 years",
        contact: "julia@health.com",
        image: "images/woman20.webp",
        rating: 4.9
    },
    {
        id: 22,
        name: "Dr. Peter Opoloti",
        specialty: "Pediatric Nutritionists",
        bio: "Specializes in infant feeding and development.",
        experience: "10 years",
        contact: "peter@health.com",
        image: "images/12.webp",
        rating: 4.8
    },
    {
        id: 23,
        name: "Dr. Sophia Mbabazi",
        specialty: "Pediatric Nutritionists",
        bio: "Expert in managing childhood obesity.",
        experience: "9 years",
        contact: "sophia@health.com",
        image: "images/woman34.webp",
        rating: 4.7
    },
    {
        id: 24,
        name: "Dr. Liam Mugisha",
        specialty: "Pediatric Nutritionists",
        bio: "Focuses on nutrition for children with special needs.",
        experience: "11 years",
        contact: "liam@health.com",
        image: "images/21.webp",
        rating: 4.8
    },

    // Functional Medicine Practitioners (4)
    {
        id: 25,
        name: "Dr. Thomas Charles",
        specialty: "Functional Medicine Practitioners",
        bio: "Specializes in holistic approaches to chronic health issues.",
        experience: "13 years",
        contact: "thomas@health.com",
        image: "images/55man.webp",
        rating: 4.7
    },
    {
        id: 26,
        name: "Dr. Grace kimono",
        specialty: "Functional Medicine Practitioners",
        bio: "Expert in integrative health and wellness.",
        experience: "10 years",
        contact: "grace@health.com",
        image: "images/08.webp",
        rating: 4.8
    },
    {
        id: 27,
        name: "Dr. Ethan Mugabi",
        specialty: "Functional Medicine Practitioners",
        bio: "Focuses on root cause analysis of health problems.",
        experience: "12 years",
        contact: "ethan@health.com",
        image: "images/doc2.webp",
        rating: 4.9
    },
    {
        id: 28,
        name: "Dr. Hannah Birungi",
        specialty: "Functional Medicine Practitioners",
        bio: "Specializes in personalized health optimization.",
        experience: "9 years",
        contact: "hannah@health.com",
        image: "images/34.webp",
        rating: 4.6
    },

    // Gastroenterologists (4)
    {
        id: 29,
        name: "Dr. john Maria ",
        specialty: "Gastroenterologists",
        bio: "Expert in digestive health and gut microbiome optimization.",
        experience: "11 years",
        contact: "maria@health.com",
        image: "images/nutril5.webp",
        rating: 4.8
    },
    {
        id: 30,
        name: "Dr. Daniel Kabalege",
        specialty: "Gastroenterologists",
        bio: "Focuses on inflammatory bowel disease management.",
        experience: "14 years",
        contact: "daniel@health.com",
        image: "images/nutril7.webp",
        rating: 4.9
    },
    {
        id: 31,
        name: "Dr. Laura Bennett",
        specialty: "Gastroenterologists",
        bio: "Specializes in liver health and nutrition.",
        experience: "10 years",
        contact: "laura@health.com",
        image: "images/woman34.webp",
        rating: 4.7
    },
    {
        id: 32,
        name: "Dr. Victor birungi",
        specialty: "Gastroenterologists",
        bio: "Expert in gastrointestinal endoscopy and nutrition.",
        experience: "12 years",
        contact: "victor@health.com",
        image: "images/woman 1.webp",
        rating: 4.8
    },

    // Weight Loss Coaches (4)
    {
        id: 33,
        name: "Dr. Samantha Everest",
        specialty: "Weight Loss Coaches",
        bio: "Specializes in sustainable weight loss strategies.",
        experience: "8 years",
        contact: "samantha@health.com",
        image: "images/19woman.webp",
        rating: 4.7
    },
    {
        id: 34,
        name: "Dr. Brian Abigaba",
        specialty: "Weight Loss Coaches",
        bio: "Focuses on behavioral approaches to weight management.",
        experience: "11 years",
        contact: "brian@health.com",
        image: "images/45.webp",
        rating: 4.8
    },
    {
        id: 35,
        name: "Dr. Claire Katusiime",
        specialty: "Weight Loss Coaches",
        bio: "Expert in mindful eating and weight loss.",
        experience: "9 years",
        contact: "claire@health.com",
        image: "images/07.webp",
        rating: 4.6
    },
    {
        id: 36,
        name: "Dr. Ryan Mugisha",
        specialty: "Weight Loss Coaches",
        bio: "Specializes in fitness-integrated weight loss programs.",
        experience: "10 years",
        contact: "ryan@health.com",
        image: "images/man44.webp",
        rating: 4.9
    },

    // Mental Health & Wellness Coaches (4)
    {
        id: 37,
        name: "Dr. Jennifer Tusabe",
        specialty: "Mental Health & Wellness Coaches",
        bio: "Focuses on stress management and emotional wellness.",
        experience: "12 years",
        contact: "jennifer@health.com",
        image: "images/woman two.webp",
        rating: 4.8
    },
    {
        id: 38,
        name: "Dr. Andrew Winnington",
        specialty: "Mental Health & Wellness Coaches",
        bio: "Expert in mindfulness and mental resilience.",
        experience: "10 years",
        contact: "andrew@health.com",
        image: "images/nutril2.webp",
        rating: 4.7
    },
    {
        id: 39,
        name: "Dr. Michelle Akampa",
        specialty: "Mental Health & Wellness Coaches",
        bio: "Specializes in holistic mental health coaching.",
        experience: "9 years",
        contact: "michelle@health.com",
        image: "images/maan2.webp",
        rating: 4.9
    },
    {
        id: 40,
        name: "Dr. Steven Busobozi",
        specialty: "Mental Health & Wellness Coaches",
        bio: "Focuses on work-life balance and mental wellbeing.",
        experience: "11 years",
        contact: "steven@health.com",
        image: "images/man66.webp",
        rating: 4.6
    }
];