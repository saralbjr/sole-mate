const blogPosts = [
    {
        id: 1,
        title: "10 Living Room Design Ideas for 2023",
        slug: "10-living-room-design-ideas-2023",
        excerpt: "Discover the latest living room design trends and ideas to transform your space in 2023.",
        content: `
      <p>Living rooms are the heart of any home - a place where family and friends gather, where you unwind after a long day, and where you express your personal style. As we move into 2023, several exciting design trends are emerging that can help you refresh your living space.</p>

      <h3>1. Curved Furniture</h3>
      <p>Say goodbye to rigid, straight lines. In 2023, curved furniture is making a strong comeback, adding softness and flow to living rooms. Consider a rounded sofa or armchairs to create a more inviting and conversational seating arrangement.</p>

      <h3>2. Nature-Inspired Elements</h3>
      <p>Bringing the outdoors in continues to be a major trend. Incorporate natural materials like wood, stone, and rattan, along with plenty of plants to create a calming, biophilic space that connects you to nature.</p>

      <h3>3. Multifunctional Spaces</h3>
      <p>As remote work continues to be prevalent, living rooms often need to accommodate different activities. Look for clever furniture solutions like nesting tables, storage ottomans, or sofa beds that can adapt to various needs.</p>

      <h3>4. Bold Colors</h3>
      <p>While neutral palettes remain popular, 2023 sees a return to bolder color choices. Consider adding a statement wall in a deep teal, terracotta, or forest green to add depth and personality to your living room.</p>

      <h3>5. Textural Contrast</h3>
      <p>Mixing textures creates visual interest and depth. Combine smooth leather with nubby bouclé, sleek metal with rough wood, or glossy surfaces with matte finishes for a rich, layered look.</p>
    `,
        author: {
            name: "Emma Thompson",
            avatar: "https://via.placeholder.com/50x50"
        },
        category: "Interior Design",
        tags: ["living room", "design trends", "home decor", "furniture"],
        image: "https://via.placeholder.com/800x500?text=Living+Room+Design",
        publishDate: "2023-05-15T10:30:00Z",
        comments: 24,
        views: 1587
    },
    {
        id: 2,
        title: "How to Choose the Perfect Mattress for Better Sleep",
        slug: "choose-perfect-mattress-better-sleep",
        excerpt: "A comprehensive guide to selecting the right mattress based on your sleep preferences and needs.",
        content: `
      <p>Quality sleep is essential for our health and wellbeing, and your mattress plays a crucial role in how well you sleep. With so many options available, finding the perfect mattress can feel overwhelming. This guide will help you navigate the choices.</p>

      <h3>Understand Mattress Types</h3>
      <p>Different mattress types offer varying benefits:</p>
      <ul>
        <li><strong>Memory Foam:</strong> Conforms to your body, providing excellent pressure relief and motion isolation.</li>
        <li><strong>Innerspring:</strong> Traditional bouncy feel with good airflow and edge support.</li>
        <li><strong>Latex:</strong> Natural option with bounce and cooling properties.</li>
        <li><strong>Hybrid:</strong> Combines coil support with foam comfort layers for a balance of support and cushioning.</li>
      </ul>

      <h3>Consider Your Sleep Position</h3>
      <p>Your preferred sleep position affects which mattress firmness is best for you:</p>
      <ul>
        <li><strong>Side sleepers:</strong> Soft to medium mattresses that cushion pressure points at the shoulders and hips.</li>
        <li><strong>Back sleepers:</strong> Medium to firm mattresses that keep your spine aligned.</li>
        <li><strong>Stomach sleepers:</strong> Firm mattresses to prevent your midsection from sinking too deeply.</li>
        <li><strong>Combination sleepers:</strong> Medium firmness that accommodates position changes.</li>
      </ul>

      <h3>Don't Forget About Temperature</h3>
      <p>If you tend to sleep hot, look for mattresses with cooling technologies like gel-infused foam, phase-change materials, or traditional innerspring designs that allow for better airflow.</p>
    `,
        author: {
            name: "Dr. James Wilson",
            avatar: "https://via.placeholder.com/50x50"
        },
        category: "Sleep & Wellness",
        tags: ["bedroom", "mattress", "sleep quality", "wellness"],
        image: "https://via.placeholder.com/800x500?text=Mattress+Guide",
        publishDate: "2023-04-28T14:15:00Z",
        comments: 37,
        views: 2103
    },
    {
        id: 3,
        title: "Small Space Solutions: Making the Most of Your Home",
        slug: "small-space-solutions-home",
        excerpt: "Clever ideas and furniture solutions to maximize functionality in small living spaces.",
        content: `
      <p>Living in a small space doesn't mean you have to compromise on style or functionality. With strategic planning and the right furniture choices, you can create a home that feels spacious and meets all your needs.</p>

      <h3>Multi-purpose Furniture is Your Friend</h3>
      <p>Look for pieces that serve multiple functions, such as storage ottomans, sofa beds, extendable dining tables, or beds with drawers underneath. These pieces help you maximize function without taking up extra floor space.</p>

      <h3>Think Vertically</h3>
      <p>When floor space is limited, utilize your walls. Install floating shelves, wall-mounted desks, or tall bookcases to take advantage of vertical space. This keeps essentials accessible while freeing up valuable floor area.</p>

      <h3>Strategic Use of Mirrors</h3>
      <p>Mirrors are a small-space designer's secret weapon. They reflect light and views, creating the illusion of more space. Place a large mirror opposite a window to maximize natural light and make the room feel more open.</p>

      <h3>Choose the Right Scale</h3>
      <p>While it might seem counterintuitive, a few larger pieces often work better than many small ones, which can make a space feel cluttered. Choose furniture with the right proportions for your space, and avoid overcrowding rooms with too many items.</p>

      <h3>Embrace Flexible Layouts</h3>
      <p>Consider furniture that can be easily moved or reconfigured. Nesting tables, modular seating, or lightweight chairs allow you to adapt your space for different activities or when entertaining guests.</p>
    `,
        author: {
            name: "Sophia Chen",
            avatar: "https://via.placeholder.com/50x50"
        },
        category: "Small Spaces",
        tags: ["small spaces", "organization", "furniture", "space saving"],
        image: "https://via.placeholder.com/800x500?text=Small+Space+Solutions",
        publishDate: "2023-05-02T09:45:00Z",
        comments: 19,
        views: 1245
    },
    {
        id: 4,
        title: "Creating a Productive Home Office Environment",
        slug: "productive-home-office-environment",
        excerpt: "Tips and furniture recommendations for setting up an efficient and comfortable home workspace.",
        content: `
      <p>With remote work becoming a permanent fixture for many professionals, creating a productive home office is more important than ever. The right setup can significantly impact your focus, efficiency, and overall well-being.</p>

      <h3>Location Matters</h3>
      <p>If possible, designate a specific area solely for work. This helps mentally separate your professional and personal life. Choose a spot with good natural light and minimal distractions. If a separate room isn't available, try to create a visual division using a screen, bookshelf, or even a change in wall color.</p>

      <h3>Invest in Ergonomics</h3>
      <p>Your health and productivity depend on comfortable, ergonomic furniture:</p>
      <ul>
        <li><strong>Chair:</strong> A properly adjusted ergonomic chair supports your back and promotes good posture.</li>
        <li><strong>Desk:</strong> Should be at a height where your elbows can rest at 90 degrees while typing.</li>
        <li><strong>Monitor:</strong> Position at eye level to reduce neck strain.</li>
        <li><strong>Keyboard and mouse:</strong> Choose ergonomic designs that keep your wrists in a neutral position.</li>
      </ul>

      <h3>Organize Your Space</h3>
      <p>An organized workspace reduces mental clutter and helps you focus. Use desk organizers, filing systems, and cable management solutions to maintain order. Consider a desk with built-in storage or add shelving above your workspace for essential items.</p>

      <h3>Personalize Thoughtfully</h3>
      <p>Add elements that inspire you, like plants, artwork, or meaningful photos. However, be mindful not to overcrowd your space with items that could become distractions.</p>
    `,
        author: {
            name: "Mark Johnson",
            avatar: "https://via.placeholder.com/50x50"
        },
        category: "Home Office",
        tags: ["office", "productivity", "remote work", "ergonomics"],
        image: "https://via.placeholder.com/800x500?text=Home+Office",
        publishDate: "2023-04-20T11:20:00Z",
        comments: 31,
        views: 1892
    },
    {
        id: 5,
        title: "Sustainable Furniture: Eco-Friendly Choices for Your Home",
        slug: "sustainable-furniture-eco-friendly-choices",
        excerpt: "How to make environmentally conscious furniture decisions without compromising on style.",
        content: `
      <p>As environmental awareness grows, many homeowners are looking for ways to make their living spaces more sustainable. Furniture choices can have a significant environmental impact, but with careful selection, you can create a beautiful home that aligns with your eco-friendly values.</p>

      <h3>Material Matters</h3>
      <p>When shopping for sustainable furniture, consider these materials:</p>
      <ul>
        <li><strong>Reclaimed wood:</strong> Gives new life to old timber, reducing the demand for new logging.</li>
        <li><strong>FSC-certified wood:</strong> Sourced from responsibly managed forests.</li>
        <li><strong>Bamboo:</strong> Fast-growing and renewable, with minimal environmental impact.</li>
        <li><strong>Recycled metal and plastic:</strong> Reduces waste and energy consumption compared to virgin materials.</li>
        <li><strong>Natural fibers:</strong> Organic cotton, wool, and linen have lower environmental impacts than synthetic alternatives.</li>
      </ul>

      <h3>Quality and Longevity</h3>
      <p>Perhaps the most sustainable furniture choice is one that lasts. Invest in well-made pieces designed to withstand years of use. This reduces waste and saves resources in the long run, even if the upfront cost is higher.</p>

      <h3>Local Production</h3>
      <p>Furniture manufactured locally reduces the carbon footprint associated with shipping. Many local artisans also prioritize sustainable practices and materials.</p>

      <h3>Second-Hand and Vintage Options</h3>
      <p>Giving new life to existing furniture through thrifting, antique shopping, or online marketplaces is perhaps the most sustainable approach of all. These pieces often offer unique character and quality craftsmanship.</p>
    `,
        author: {
            name: "Olivia Green",
            avatar: "https://via.placeholder.com/50x50"
        },
        category: "Sustainability",
        tags: ["eco-friendly", "sustainable", "green living", "furniture"],
        image: "https://via.placeholder.com/800x500?text=Sustainable+Furniture",
        publishDate: "2023-05-10T13:40:00Z",
        comments: 42,
        views: 2358
    }
];

export default blogPosts;