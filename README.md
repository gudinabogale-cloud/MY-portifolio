<<<<<<< HEAD
# My Modern Portfolio Website

A beautiful, responsive, and fully functional portfolio website built with React. This portfolio showcases projects, skills, blog posts, testimonials, and provides a contact form for potential clients and collaborators.

## Features

✨ **Modern Design**
- Sleek and professional UI/UX
- Smooth animations and transitions
- Mobile-responsive layout

🌓 **Dark Mode Toggle**
- Beautiful light and dark themes
- Persistent theme preference using localStorage

📱 **Fully Responsive**
- Works seamlessly on mobile, tablet, and desktop
- Mobile-first design approach
- Hamburger menu for mobile navigation

🎯 **Key Sections**

1. **Hero Section** - Eye-catching introduction with CTA buttons
2. **About** - Personal introduction with statistics
3. **Skills** - Organized skill categories
4. **Projects** - Showcase of your best work with links
5. **Blog** - Latest articles and posts
6. **Testimonials** - Client reviews and feedback
7. **Contact** - Contact form with form validation
8. **Navigation** - Sticky header with smooth scrolling

## Tech Stack

- **React** - UI library
- **CSS3** - Styling with CSS variables for theming
- **React Icons** - Icon library
- **React Scroll** - Smooth scrolling navigation
- **EmailJS** - Email service (optional for contact form)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The site will open at [http://localhost:3000](http://localhost:3000)

## Customization

### Update Personal Information
Edit the following files to add your information:

- **App.js** - Update social links
- **Hero.js** - Update introduction text and links
- **About.js** - Add your bio and statistics
- **Skills.js** - Add your skills
- **Projects.js** - Add your projects
- **Blog.js** - Add your blog posts
- **Testimonials.js** - Add client testimonials
- **Contact.js** - Update contact information
- **Footer.js** - Update footer links

### Customize Colors
Edit `index.css` to customize the color scheme:
```css
:root {
  --accent: #007bff;
  --accent-hover: #0056b3;
  /* ... other colors */
}
```

### Add Your Images
Replace placeholder images with your actual assets in the respective components.

## Deployment

### Deploy to Netlify

1. **Build the project:**
```bash
npm run build
```

2. **Connect to Netlify:**
- Create an account at [Netlify](https://www.netlify.com)
- Connect your GitHub repository
- Set build command: `npm run build`
- Set publish directory: `build`
- Deploy!

### Environment Variables
Create a `.env` file for sensitive data (if needed):
```
REACT_APP_EMAIL_SERVICE_ID=your_service_id
REACT_APP_EMAIL_TEMPLATE_ID=your_template_id
REACT_APP_EMAIL_PUBLIC_KEY=your_public_key
```

## Contact Form Setup (Optional)

To enable the contact form with email functionality:

1. Sign up at [EmailJS](https://www.emailjs.com)
2. Get your Service ID, Template ID, and Public Key
3. Update the Contact component with your credentials:

```javascript
emailjs.init("YOUR_PUBLIC_KEY");
```

## Project Structure

```
portfolio/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Skills.js
│   │   ├── Projects.js
│   │   ├── Blog.js
│   │   ├── Testimonials.js
│   │   ├── Contact.js
│   │   ├── Footer.js
│   │   └── *.css (component styles)
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── .gitignore
├── package.json
├── netlify.toml
└── README.md
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Runs the test suite
- `npm eject` - Ejects from create-react-app (irreversible)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimization

- Code splitting and lazy loading
- Optimized CSS with CSS variables
- Smooth animations without performance impact
- Responsive images

## Accessibility

- Semantic HTML
- ARIA labels where appropriate
- Keyboard navigation support
- High contrast ratios

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Feel free to fork this project and submit pull requests.

## Support

If you have questions or need help, feel free to reach out through the contact form or social media links.

---

**Made with React • Deployed on Netlify**

Happy coding! 🚀
=======
# MY-portifolio
>>>>>>> 641e751b86cc215f9e6116c1a416daa271b42f26
