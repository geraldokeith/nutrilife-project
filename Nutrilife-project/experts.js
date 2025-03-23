const experts = [
    // Nutritionists (4)
    {
        id: 1,
        name: "Dr. Sarah Johnson",
        specialty: "Nutritionist",
        bio: "Expert in sustainable weight loss and dietary planning.",
        experience: "10 years",
        contact: "sarah@health.com",
        image: "images/resized_nutril3.webp",
        rating: 4.8
    },
    {
        id: 2,
        name: "Dr. Linda Patel",
        specialty: "Nutritionist",
        bio: "Specializes in plant-based nutrition and wellness.",
        experience: "8 years",
        contact: "linda@health.com",
        image: "images/woman 1.webp",
        rating: 4.7
    },
    {
        id: 3,
        name: "Dr. Robert Miles",
        specialty: "Nutritionist",
        bio: "Focuses on nutritional counseling for lifestyle changes.",
        experience: "12 years",
        contact: "robert@health.com",
        image: "https://images.unsplash.com/photo-1612349317154-3c9ba00a3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        rating: 4.9
    },
    {
        id: 4,
        name: "Dr. Karen White",
        specialty: "Nutritionist",
        bio: "Expert in meal planning and nutritional education.",
        experience: "9 years",
        contact: "karen@health.com",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        rating: 4.6
    },

    // Endocrinologists (4)
    {
        id: 5,
        name: "Dr. Michael Chen",
        specialty: "Endocrinologist",
        bio: "Specializes in hormonal imbalances and diabetes management.",
        experience: "15 years",
        contact: "michael@health.com",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        rating: 4.9
    },
    {
        id: 6,
        name: "Dr. Anita Sharma",
        specialty: "Endocrinologist",
        bio: "Focuses on thyroid disorders and metabolic health.",
        experience: "11 years",
        contact: "anita@health.com",
        image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        rating: 4.8
    },
    {
        id: 7,
        name: "Dr. David Lee",
        specialty: "Endocrinologist",
        bio: "Expert in pituitary and adrenal gland disorders.",
        experience: "13 years",
        contact: "david@health.com",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        rating: 4.7
    },
    {
        id: 8,
        name: "Dr. Susan Brooks",
        specialty: "Endocrinologist",
        bio: "Specializes in reproductive endocrinology.",
        experience: "10 years",
        contact: "susan@health.com",
        image: "https://images.unsplash.com/photo-1596545570658-8eb5e6b9b8e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        rating: 4.8
    },

    // Cardiologists (4)
    {
        id: 9,
        name: "Dr. Emily Rodriguez",
        specialty: "Cardiologist",
        bio: "Focuses on heart health and preventive cardiology.",
        experience: "8 years",
        contact: "emily@health.com",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        rating: 4.7
    },
    {
        id: 10,
        name: "Dr. James Carter",
        specialty: "Cardiologist",
        bio: "Expert in cardiovascular disease prevention.",
        experience: "14 years",
        contact: "james@health.com",
        image: "https://images.unsplash.com/photo-1612349317154-3c9ba00a3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        rating: 4.9
    },
    {
        id: 11,
        name: "Dr. Olivia Grant",
        specialty: "Cardiologist",
        bio: "Specializes in heart rhythm disorders.",
        experience: "9 years",
        contact: "olivia@health.com",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        rating: 4.6
    },
    {
        id: 12,
        name: "Dr. Henry Ford",
        specialty: "Cardiologist",
        bio: "Focuses on interventional cardiology procedures.",
        experience: "16 years",
        contact: "henry@health.com",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        rating: 4.8
    },

    // Clinical Nutritionists (4)
    {
        id: 13,
        name: "Dr. Lisa Thompson",
        specialty: "Clinical Nutritionists",
        bio: "Specializes in medical nutrition therapy for chronic conditions.",
        experience: "12 years",
        contact: "lisa@health.com",
        image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        rating: 4.8
    },
    {
        id: 14,
        name: "Dr. Mark Evans",
        specialty: "Clinical Nutritionists",
        bio: "Expert in nutrition for kidney disease management.",
        experience: "10 years",
        contact: "mark@health.com",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        rating: 4.7
    },
    {
        id: 15,
        name: "Dr. Rachel Kim",
        specialty: "Clinical Nutritionists",
        bio: "Focuses on nutritional support for cancer patients.",
        experience: "7 years",
        contact: "rachel@health.com",
        image: "https://images.unsplash.com/photo-1598257006626-9956c420c77d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        rating: 4.9
    },
    {
        id: 16,
        name: "Dr. Thomas Blake",
        specialty: "Clinical Nutritionists",
        bio: "Specializes in nutrition for autoimmune disorders.",
        experience: "11 years",
        contact: "thomas@health.com",
        image: "https://images.unsplash.com/photo-1596545570658-8eb5e6b9b8e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        rating: 4.6
    },

    // Sports Nutritionists 
    {
        id: 17,
        name: "Dr. Alex Turner",
        specialty: "Sports Nutritionists",
        bio: "Expert in optimizing athletic performance through nutrition.",
        experience: "9 years",
        contact: "alex@health.com",
        image: "https://images.unsplash.com/photo-1612349317154-3c9ba00a3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        rating: 4.8
    },
    {
        id: 18,
        name: "Dr. Natalie Wood",
        specialty: "Sports Nutritionists",
        bio: "Focuses on endurance athlete nutrition plans.",
        experience: "6 years",
        contact: "natalie@health.com",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        rating: 4.7
    },
    {
        id: 19,
        name: "Dr. Chris Parker",
        specialty: "Sports Nutritionists",
        bio: "Specializes in strength training nutrition.",
        experience: "13 years",
        contact: "chris@health.com",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        rating: 4.9
    },
    {
        id: 20,
        name: "Dr. Emma Stone",
        specialty: "Sports Nutritionists",
        bio: "Expert in recovery nutrition for athletes.",
        experience: "8 years",
        contact: "emma@health.com",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        rating: 4.6
    },

    // Pediatric Nutritionists (4)
    {
        id: 21,
        name: "Dr. Julia Hayes",
        specialty: "Pediatric Nutritionists",
        bio: "Focuses on children's nutritional needs and growth.",
        experience: "7 years",
        contact: "julia@health.com",
        image: "https://images.unsplash.com/photo-1598257006626-9956c420c77d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        rating: 4.9
    },
    {
        id: 22,
        name: "Dr. Peter Nguyen",
        specialty: "Pediatric Nutritionists",
        bio: "Specializes in infant feeding and development.",
        experience: "10 years",
        contact: "peter@health.com",
        image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        rating: 4.8
    },
    {
        id: 23,
        name: "Dr. Sophia Chen",
        specialty: "Pediatric Nutritionists",
        bio: "Expert in managing childhood obesity.",
        experience: "9 years",
        contact: "sophia@health.com",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        rating: 4.7
    },
    {
        id: 24,
        name: "Dr. Liam Foster",
        specialty: "Pediatric Nutritionists",
        bio: "Focuses on nutrition for children with special needs.",
        experience: "11 years",
        contact: "liam@health.com",
        image: "https://images.unsplash.com/photo-1596545570658-8eb5e6b9b8e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        rating: 4.8
    },

    // Functional Medicine Practitioners (4)
    {
        id: 25,
        name: "Dr. Thomas Blake",
        specialty: "Functional Medicine Practitioners",
        bio: "Specializes in holistic approaches to chronic health issues.",
        experience: "13 years",
        contact: "thomas@health.com",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        rating: 4.7
    },
    {
        id: 26,
        name: "Dr. Grace Miller",
        specialty: "Functional Medicine Practitioners",
        bio: "Expert in integrative health and wellness.",
        experience: "10 years",
        contact: "grace@health.com",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        rating: 4.8
    },
    {
        id: 27,
        name: "Dr. Ethan Ross",
        specialty: "Functional Medicine Practitioners",
        bio: "Focuses on root cause analysis of health problems.",
        experience: "12 years",
        contact: "ethan@health.com",
        image: "https://images.unsplash.com/photo-1612349317154-3c9ba00a3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        rating: 4.9
    },
    {
        id: 28,
        name: "Dr. Hannah Lee",
        specialty: "Functional Medicine Practitioners",
        bio: "Specializes in personalized health optimization.",
        experience: "9 years",
        contact: "hannah@health.com",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        rating: 4.6
    },

    // Gastroenterologists (4)
    {
        id: 29,
        name: "Dr. Maria Gonzalez",
        specialty: "Gastroenterologists",
        bio: "Expert in digestive health and gut microbiome optimization.",
        experience: "11 years",
        contact: "maria@health.com",
        image: "https://images.unsplash.com/photo-1596545570658-8eb5e6b9b8e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        rating: 4.8
    },
    {
        id: 30,
        name: "Dr. Daniel Kim",
        specialty: "Gastroenterologists",
        bio: "Focuses on inflammatory bowel disease management.",
        experience: "14 years",
        contact: "daniel@health.com",
        image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        rating: 4.9
    },
    {
        id: 31,
        name: "Dr. Laura Bennett",
        specialty: "Gastroenterologists",
        bio: "Specializes in liver health and nutrition.",
        experience: "10 years",
        contact: "laura@health.com",
        image: "https://images.unsplash.com/photo-1598257006626-9956c420c77d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        rating: 4.7
    },
    {
        id: 32,
        name: "Dr. Victor Singh",
        specialty: "Gastroenterologists",
        bio: "Expert in gastrointestinal endoscopy and nutrition.",
        experience: "12 years",
        contact: "victor@health.com",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        rating: 4.8
    },

    // Weight Loss Coaches (4)
    {
        id: 33,
        name: "Dr. Samantha Reed",
        specialty: "Weight Loss Coaches",
        bio: "Specializes in sustainable weight loss strategies.",
        experience: "8 years",
        contact: "samantha@health.com",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        rating: 4.7
    },
    {
        id: 34,
        name: "Dr. Brian Holt",
        specialty: "Weight Loss Coaches",
        bio: "Focuses on behavioral approaches to weight management.",
        experience: "11 years",
        contact: "brian@health.com",
        image: "https://images.unsplash.com/photo-1612349317154-3c9ba00a3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        rating: 4.8
    },
    {
        id: 35,
        name: "Dr. Claire Morgan",
        specialty: "Weight Loss Coaches",
        bio: "Expert in mindful eating and weight loss.",
        experience: "9 years",
        contact: "claire@health.com",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        rating: 4.6
    },
    {
        id: 36,
        name: "Dr. Ryan Patel",
        specialty: "Weight Loss Coaches",
        bio: "Specializes in fitness-integrated weight loss programs.",
        experience: "10 years",
        contact: "ryan@health.com",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        rating: 4.9
    },

    // Mental Health & Wellness Coaches (4)
    {
        id: 37,
        name: "Dr. Jennifer Lowe",
        specialty: "Mental Health & Wellness Coaches",
        bio: "Focuses on stress management and emotional wellness.",
        experience: "12 years",
        contact: "jennifer@health.com",
        image: "https://images.unsplash.com/photo-1596545570658-8eb5e6b9b8e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        rating: 4.8
    },
    {
        id: 38,
        name: "Dr. Andrew Walsh",
        specialty: "Mental Health & Wellness Coaches",
        bio: "Expert in mindfulness and mental resilience.",
        experience: "10 years",
        contact: "andrew@health.com",
        image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        rating: 4.7
    },
    {
        id: 39,
        name: "Dr. Michelle Tan",
        specialty: "Mental Health & Wellness Coaches",
        bio: "Specializes in holistic mental health coaching.",
        experience: "9 years",
        contact: "michelle@health.com",
        image: "https://images.unsplash.com/photo-1598257006626-9956c420c77d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        rating: 4.9
    },
    {
        id: 40,
        name: "Dr. Steven Grey",
        specialty: "Mental Health & Wellness Coaches",
        bio: "Focuses on work-life balance and mental wellbeing.",
        experience: "11 years",
        contact: "steven@health.com",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        rating: 4.6
    }
];