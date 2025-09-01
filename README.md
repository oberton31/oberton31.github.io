# Oliver Berton - Personal Website

A modern, responsive personal website built with HTML, CSS, and JavaScript, designed to be hosted on GitHub Pages.

## Features

- **Professional Design**: Clean, modern layout with gradient backgrounds and smooth animations
- **Responsive**: Mobile-friendly design that works on all devices
- **Profile Section**: Prominent photo area with placeholder for your image
- **Action Buttons**: LinkedIn and Resume buttons with hover effects
- **Customizable**: Easy to modify content, colors, and styling

## Customization

### 1. Personal Information
Edit the `index.html` file to update:
- Your name (replace "Oliver Berton")
- Tagline and bio
- About me section
- LinkedIn profile URL
- Resume file

### 2. Profile Photo
To add your profile photo:
1. Place your photo in the root directory
2. Rename it to `profile-photo.jpg` (or update the HTML to match your filename)
3. Recommended size: 400x400 pixels or larger (will be automatically resized)

### 3. LinkedIn URL
Update the LinkedIn button URL in `index.html`:
```html
<a href="https://linkedin.com/in/your-actual-profile" target="_blank" class="btn btn-linkedin">
```

### 4. Resume
Add your resume PDF to the root directory and update the link in `index.html`:
```html
<a href="your-resume.pdf" target="_blank" class="btn btn-resume">
```

### 5. Colors and Styling
Modify `styles.css` to change:
- Background gradients
- Button colors
- Font sizes and colors
- Spacing and layout

## Deployment to GitHub Pages

### Option 1: Automatic Deployment (Recommended)
1. Push your code to a GitHub repository
2. Go to repository Settings → Pages
3. Select "Deploy from a branch"
4. Choose your main branch (usually `main` or `master`)
5. Click Save

### Option 2: Manual Deployment
1. Create a new repository on GitHub
2. Clone it to your local machine
3. Copy all website files to the repository
4. Commit and push your changes
5. Enable GitHub Pages in repository settings

## File Structure
```
oliverberton.github.io/
├── index.html          # Main webpage
├── styles.css          # Styling and layout
├── script.js           # Interactive functionality
├── README.md           # This file
├── profile-photo.jpg   # Your profile photo (add this)
├── resume.pdf          # Your resume (add this)
└── .git/               # Git repository
```

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Customization Tips

### Adding More Sections
To add new sections, insert them in the `main-content` div in `index.html`:
```html
<div class="additional-section">
    <h2>New Section Title</h2>
    <p>Your content here...</p>
</div>
```

### Changing the Color Scheme
Update the CSS variables in `styles.css`:
```css
body {
    background: linear-gradient(135deg, #your-color-1 0%, #your-color-2 100%);
}
```

### Adding Social Media Links
Create new buttons following the existing pattern:
```html
<a href="https://github.com/yourusername" target="_blank" class="btn btn-github">
    <i class="fab fa-github"></i>
    GitHub Profile
</a>
```

## Support
If you need help customizing your website:
1. Check the HTML structure in `index.html`
2. Modify styles in `styles.css`
3. Add functionality in `script.js`
4. Refer to CSS and HTML documentation for advanced customization

## License
This project is open source and available under the [MIT License](LICENSE).

