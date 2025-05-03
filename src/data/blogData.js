const blogData = [
    {
        id: 1,
        title: "How to Choose the Right Running Shoes for Your Foot Type",
        category: "Running",
        author: "Sarah Johnson",
        date: "June 15, 2023",
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
        excerpt: "Find the perfect running shoes based on your pronation, arch type, and running style to improve performance and prevent injuries.",
        content: `<p>Choosing the right running shoes is essential for both comfort and injury prevention. This guide will help you understand how to select the perfect pair based on your unique foot characteristics and running style.</p>
        <h2>Understanding Pronation</h2>
        <p>Pronation refers to the natural inward roll of your foot as it strikes the ground. There are three main types:</p>
        <ul>
            <li><strong>Neutral pronation</strong>: Your foot rolls inward about 15% to absorb shock. Neutral runners can wear a wide variety of shoes.</li>
            <li><strong>Overpronation</strong>: Your foot rolls inward more than 15%. Look for stability or motion control shoes.</li>
            <li><strong>Underpronation (Supination)</strong>: Your foot rolls outward. Cushioned shoes with flexible midsoles are best.</li>
        </ul>
        <h2>Analyzing Your Arch Type</h2>
        <p>Your arch type is closely related to pronation and affects which shoes will provide the best support:</p>
        <ul>
            <li><strong>Medium/Normal Arch</strong>: Compatible with most shoes; look for moderate stability.</li>
            <li><strong>Low Arch/Flat Feet</strong>: Usually associated with overpronation; look for stability features.</li>
            <li><strong>High Arch</strong>: Often linked to underpronation; prioritize cushioning.</li>
        </ul>
        <h2>Consider Your Running Environment</h2>
        <p>Where you run should influence your shoe choice:</p>
        <ul>
            <li><strong>Road running</strong>: Lightweight with good cushioning for hard surfaces.</li>
            <li><strong>Trail running</strong>: More aggressive tread patterns and protective features.</li>
            <li><strong>Track running</strong>: Lightweight with minimal cushioning.</li>
        </ul>
        <h2>When to Replace Your Running Shoes</h2>
        <p>Most running shoes last between 300-500 miles. Signs it's time to replace include visible midsole compression, worn outsoles, or new aches and pains.</p>
        <p>Investing time in finding the right running shoes will pay dividends in comfort, performance, and injury prevention.</p>`,
        comments: [
            {
                id: 1,
                name: "Michael Smith",
                date: "June 16, 2023",
                text: "This article helped me understand why I was having shin splints. Switched to stability shoes and the problem disappeared!"
            },
            {
                id: 2,
                name: "Jessica Davis",
                date: "June 17, 2023",
                text: "Could you recommend specific brands for runners with high arches? I'm training for my first marathon."
            }
        ]
    },
    {
        id: 2,
        title: "5 Signs It's Time to Replace Your Athletic Shoes",
        category: "Care & Maintenance",
        author: "David Miller",
        date: "May 28, 2023",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        excerpt: "Learn the key indicators that your athletic shoes are worn out and how replacing them at the right time can prevent injuries and improve performance.",
        content: `<p>Athletic shoes are designed to provide support, cushioning, and stability during physical activities. However, they don't last forever, and continuing to use worn-out shoes can lead to discomfort and injuries.</p>
        <h2>1. Visible Midsole Compression</h2>
        <p>The midsole is the cushioning layer between the upper and the outsole. When you see compression lines or the midsole appears crushed, it's no longer providing adequate shock absorption.</p>
        <h2>2. Uneven Wear on the Outsoles</h2>
        <p>Check the bottom of your shoes. If the tread pattern is worn down significantly or unevenly, it's time for a replacement. Uneven wear can also indicate biomechanical issues that might require specialized shoes.</p>
        <h2>3. Upper Damage or Stretching</h2>
        <p>Tears, holes, or stretched areas in the upper part of the shoe compromise support and can lead to instability during movement.</p>
        <h2>4. They've Reached Their Mileage Limit</h2>
        <p>Most athletic shoes are designed to last between 300-500 miles (or 4-6 months of regular use). Keep track of when you purchased your shoes and how much you've used them.</p>
        <h2>5. New Aches and Pains</h2>
        <p>If you start experiencing foot, ankle, knee, or hip pain that wasn't there before, your shoes might be failing to provide proper support.</p>
        <h2>How to Extend Your Shoes' Lifespan</h2>
        <ul>
            <li>Rotate between two pairs of athletic shoes</li>
            <li>Use your athletic shoes only for their intended activity</li>
            <li>Keep them clean and dry</li>
            <li>Store them properly, away from extreme temperatures</li>
        </ul>
        <p>Investing in new athletic shoes when needed is investing in your physical health and performance.</p>`,
        comments: [
            {
                id: 1,
                name: "Robert Chen",
                date: "May 29, 2023",
                text: "I never realized my running shoes were causing my knee pain until I read this. Bought a new pair and it made a huge difference!"
            },
            {
                id: 2,
                name: "Laura Thomas",
                date: "June 1, 2023",
                text: "Great article! Do you have any recommendations for sustainable shoe disposal? I'd rather not send my old shoes to the landfill."
            },
            {
                id: 3,
                name: "James Wilson",
                date: "June 3, 2023",
                text: "I've been rotating between two pairs as suggested and it definitely helps them last longer. Great advice!"
            }
        ]
    },
    {
        id: 3,
        title: "The Ultimate Guide to Sustainable Footwear Brands",
        category: "Sustainability",
        author: "Emma Green",
        date: "April 12, 2023",
        image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
        excerpt: "Discover eco-friendly shoe brands that are revolutionizing the footwear industry with sustainable materials and ethical manufacturing processes.",
        content: `<p>As climate awareness grows, many consumers are seeking sustainable alternatives in all aspects of their lives—including footwear. Fortunately, innovative brands are rising to the challenge, creating stylish, durable shoes with minimal environmental impact.</p>
        <h2>What Makes Footwear Sustainable?</h2>
        <p>Truly sustainable shoes consider multiple factors:</p>
        <ul>
            <li><strong>Materials</strong>: Recycled, renewable, or biodegradable components</li>
            <li><strong>Manufacturing</strong>: Low-waste production methods and renewable energy</li>
            <li><strong>Working conditions</strong>: Fair wages and safe environments for workers</li>
            <li><strong>Durability</strong>: Longer-lasting designs that need less frequent replacement</li>
            <li><strong>End-of-life considerations</strong>: Recyclable or biodegradable when worn out</li>
        </ul>
        <h2>Pioneering Sustainable Footwear Brands</h2>
        <p>These companies are leading the way in eco-friendly shoe design:</p>
        <ul>
            <li><strong>Allbirds</strong>: Known for their merino wool sneakers and sugarcane-based soles</li>
            <li><strong>Veja</strong>: Uses organic cotton, recycled plastic bottles, and wild rubber from the Amazon</li>
            <li><strong>Rothy's</strong>: Transforms plastic water bottles into stylish, machine-washable flats</li>
            <li><strong>Nothing New</strong>: Creates classic sneakers from 100% recycled materials</li>
            <li><strong>Saola</strong>: Uses algae-based foam, recycled plastic, and organic cotton</li>
        </ul>
        <h2>The Future of Sustainable Footwear</h2>
        <p>Exciting innovations are on the horizon, including shoes made from mushroom leather, algae, and even carbon captured from the atmosphere. As technology advances, we can expect more sustainable options that don't compromise on style or performance.</p>
        <p>By choosing eco-friendly footwear, consumers can walk lighter on the planet while still expressing their personal style.</p>`,
        comments: [
            {
                id: 1,
                name: "Taylor Jackson",
                date: "April 14, 2023",
                text: "I've been wearing Allbirds for years and love them! Great to see them on your list. Their tree runners are incredibly comfortable."
            },
            {
                id: 2,
                name: "Jordan Lee",
                date: "April 15, 2023",
                text: "Has anyone tried Saola shoes? I'm interested in their algae-based foam technology but wondering about durability."
            }
        ]
    },
    {
        id: 4,
        title: "How to Break In New Shoes Without the Pain",
        category: "Tips",
        author: "Olivia Parker",
        date: "March 5, 2023",
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1112&q=80",
        excerpt: "Practical methods to comfortably break in new shoes without suffering through blisters and discomfort.",
        content: `<p>The excitement of new shoes can quickly turn to pain when those stiff new materials start causing blisters. But breaking in new footwear doesn't have to be an ordeal—with the right approach, you can speed up the process while minimizing discomfort.</p>
        <h2>Start Slowly</h2>
        <p>The golden rule of breaking in new shoes is to introduce them gradually:</p>
        <ul>
            <li>Wear them for 1-2 hours the first day</li>
            <li>Gradually increase wear time over the next few days</li>
            <li>Initially wear them only indoors if possible</li>
            <li>Bring a backup pair of comfortable shoes when wearing them out</li>
        </ul>
        <h2>Protective Measures</h2>
        <p>Prevent blisters before they start with these tactics:</p>
        <ul>
            <li>Apply moleskin or bandages to potential pressure points</li>
            <li>Wear thick socks (or two pairs) to reduce friction</li>
            <li>Use blister prevention balms on potential trouble spots</li>
        </ul>
        <h2>Physical Techniques</h2>
        <p>For leather and some synthetic shoes, try these methods:</p>
        <ul>
            <li>Use a shoe stretcher overnight</li>
            <li>Apply leather conditioner to soften the material</li>
            <li>Bend and flex the sole repeatedly by hand</li>
            <li>Use a hairdryer (on low heat) to warm leather while wearing thick socks</li>
        </ul>
        <h2>When to Give Up</h2>
        <p>Sometimes, shoes that cause significant pain despite break-in attempts may never be comfortable. If you're experiencing persistent discomfort after two weeks, consider whether the shoes are the wrong size or shape for your feet.</p>
        <p>Remember that high-quality shoes made from good materials typically break in more nicely and conform to your foot's shape over time.</p>`,
        comments: [
            {
                id: 1,
                name: "Sophia Martinez",
                date: "March 7, 2023",
                text: "The hairdryer trick worked wonders on my leather boots! Just be careful not to overheat the material."
            },
            {
                id: 2,
                name: "Noah Thompson",
                date: "March 10, 2023",
                text: "I've found that wearing new shoes around the house with thick socks while doing chores is perfect for breaking them in."
            }
        ]
    },
    {
        id: 5,
        title: "Summer Footwear Trends: What's Hot This Season",
        category: "Fashion",
        author: "Alex Rodriguez",
        date: "May 5, 2023",
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
        excerpt: "Stay ahead of the curve with this season's most fashionable summer footwear styles, from minimalist sandals to statement sneakers.",
        content: `<p>As temperatures rise, it's time to refresh your footwear collection with this season's hottest trends. Summer 2023 brings a fascinating mix of nostalgic revivals and forward-looking designs.</p>
        <h2>Platform Everything</h2>
        <p>The 90s revival continues with platform shoes dominating summer fashion:</p>
        <ul>
            <li>Platform sandals with chunky straps</li>
            <li>Elevated flip-flops for casual-but-tall vibes</li>
            <li>Platform sneakers that add height without sacrificing comfort</li>
        </ul>
        <h2>Sustainable Styles</h2>
        <p>Eco-consciousness is more than a trend—it's becoming an expectation:</p>
        <ul>
            <li>Sandals made from ocean plastic</li>
            <li>Biodegradable espadrilles</li>
            <li>Recycled material sneakers in bright summer colors</li>
        </ul>
        <h2>Minimalist Designs</h2>
        <p>"Less is more" defines many of this season's most elegant options:</p>
        <ul>
            <li>Barely-there strappy sandals</li>
            <li>Sleek, monochromatic sneakers</li>
            <li>Simple slide sandals with architectural elements</li>
        </ul>
        <h2>Bold Colors and Patterns</h2>
        <p>For those who want to make a statement:</p>
        <ul>
            <li>Color-blocked athletic shoes</li>
            <li>Neon accents on neutral bases</li>
            <li>Tropical prints and botanical patterns</li>
            <li>Metallics and iridescent finishes</li>
        </ul>
        <h2>Comfort-Focused Fashion</h2>
        <p>Post-pandemic, comfort remains non-negotiable:</p>
        <ul>
            <li>Fashion-forward orthopedic sandals</li>
            <li>Dressy sneakers that work for special occasions</li>
            <li>Soft, flexible materials that move with your foot</li>
        </ul>
        <p>This summer, footwear bridges the gap between expression and function, with options for every style preference and practical need.</p>`,
        comments: [
            {
                id: 1,
                name: "Harper Williams",
                date: "May 7, 2023",
                text: "I'm so glad comfortable shoes are still trending! I've been eyeing those platform sandals that don't sacrifice comfort."
            },
            {
                id: 2,
                name: "Riley Johnson",
                date: "May 8, 2023",
                text: "Any specific brand recommendations for those biodegradable espadrilles mentioned? I'd love to check them out."
            },
            {
                id: 3,
                name: "Casey Morgan",
                date: "May 10, 2023",
                text: "I've been seeing those minimalist sandals everywhere! Definitely the must-have shoe this summer."
            }
        ]
    },
    {
        id: 6,
        title: "The Science Behind Athletic Shoe Technology",
        category: "Athletic",
        author: "Dr. Marcus Lee",
        date: "April 28, 2023",
        image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
        excerpt: "A deep dive into the engineering and materials science that powers modern athletic footwear and enhances human performance.",
        content: `<p>Modern athletic shoes are technological marvels, incorporating advanced materials and design principles to enhance performance while reducing injury risk. This article explores the science that makes these innovations possible.</p>
        <h2>Midsole Revolution</h2>
        <p>The midsole is where much of the performance magic happens:</p>
        <ul>
            <li><strong>EVA (Ethylene-Vinyl Acetate)</strong>: Traditional cushioning material that provides adequate shock absorption</li>
            <li><strong>Polyurethane</strong>: More durable than EVA but heavier, used in shoes designed for longevity</li>
            <li><strong>Adaptive Foams</strong>: Materials like Adidas Boost and Nike React that provide superior energy return</li>
            <li><strong>Carbon Fiber Plates</strong>: Stiff plates that act as a spring mechanism to propel the runner forward</li>
        </ul>
        <h2>Biomechanics-Based Design</h2>
        <p>Shoe designs increasingly incorporate research on how the body moves:</p>
        <ul>
            <li>Strategic flexibility zones that work with the foot's natural bending points</li>
            <li>Stability features positioned to counter excessive motion only where needed</li>
            <li>Heel-to-toe drops customized for different running styles and activities</li>
            <li>Outsole traction patterns based on pressure mapping studies</li>
        </ul>
        <h2>Upper Construction Advancements</h2>
        <p>The upper part of athletic shoes has seen remarkable innovation:</p>
        <ul>
            <li><strong>Engineered Knit</strong>: Provides targeted zones of stretch, support, and ventilation</li>
            <li><strong>3D Printing</strong>: Allows for intricate structures impossible with traditional manufacturing</li>
            <li><strong>Adaptive Fit Systems</strong>: Cables, wires, or mechanical systems that adjust fit automatically</li>
        </ul>
        <h2>Sport-Specific Optimization</h2>
        <p>Different activities place unique demands on footwear:</p>
        <ul>
            <li><strong>Running</strong>: Focuses on impact protection and energy return</li>
            <li><strong>Basketball</strong>: Prioritizes ankle support and multidirectional traction</li>
            <li><strong>Tennis</strong>: Emphasizes lateral stability and durability</li>
            <li><strong>Cross-training</strong>: Balances versatility across multiple movement patterns</li>
        </ul>
        <p>As our understanding of human performance deepens and material science advances, we can expect even more remarkable innovations in athletic footwear technology.</p>`,
        comments: [
            {
                id: 1,
                name: "Dr. Samantha Hughes",
                date: "April 30, 2023",
                text: "Excellent breakdown of the technology. I've been researching the impact of carbon plates on running economy, and the results are fascinating."
            },
            {
                id: 2,
                name: "Ethan Brooks",
                date: "May 1, 2023",
                text: "How much of a performance difference do these technologies actually make for amateur athletes? Is it worth the premium price?"
            }
        ]
    }
];

export default blogData;