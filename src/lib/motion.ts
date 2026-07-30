// Variables globales de Framer Motion para el proyecto
export const motionVariants = {
fadeIn: {
hidden: { opacity: 0 },
visible: {
opacity: 1,
transition: { duration: 0.6 }
}
},
fadeInUp: {
hidden: { opacity: 0, y: 30 },
visible: {
opacity: 1,
y: 0,
transition: { duration: 0.6 }
}
},
fadeInDown: {
hidden: { opacity: 0, y: -30 },
visible: {
opacity: 1,
y: 0,
transition: { duration: 0.6 }
}
},
fadeInLeft: {
hidden: { opacity: 0, x: -30 },
visible: {
opacity: 1,
x: 0,
transition: { duration: 0.6 }
}
},
fadeInRight: {
hidden: { opacity: 0, x: 30 },
visible: {
opacity: 1,
x: 0,
transition: { duration: 0.6 }
}
},
scaleIn: {
hidden: { opacity: 0, scale: 0.9 },
visible: {
opacity: 1,
scale: 1,
transition: { duration: 0.5 }
}
},
staggerContainer: {
        hidden: { opacity: 0 },
        visible: {
        opacity: 1,
transition: {
    staggerChildren: 0.15,
    delayChildren: 0.1
        }
    }
},
staggerItem: {
hidden: { opacity: 0, y: 20 },
visible: {
opacity: 1,
y: 0,
transition: { duration: 0.5 }
}
}
};

// Duraciones predefinidas
export const motionDurations = {
fast: 0.3,
normal: 0.5,
slow: 0.8,
slower: 1.2
};
// Easing functions
export const motionEasing = {
easeOut: [0.25, 0.1, 0.25, 1],
easeInOut: [0.42, 0, 0.58, 1],
spring: { type: "spring", stiffness: 100, damping: 15 }
};