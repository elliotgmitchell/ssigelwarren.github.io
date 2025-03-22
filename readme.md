# Dramaturge Portfolio Website

A personal website for a Dramaturge built with Jekyll and deployable to GitHub Pages.

## Todos

- Get sophie a domain name and publish to that domain
- Double check details and images for the carousel
- Update the about section with Sophie's current job??
- Update the formspree form so that Sophie gets the emails

## Features

- Responsive design that works on all devices
- Homepage with image carousel showcasing production work
- About page with bio and headshot
- Contact form that sends submissions to your email
- Clean, professional aesthetic appropriate for theater professionals

## Setup Instructions

### Prerequisites

- Ruby (version 2.5.0 or higher)
- RubyGems
- GCC and Make (for some Ruby gem dependencies)
- Git

### Local Development

1. **Clone this repository**
   ```
   git clone https://github.com/your-username/dramaturge-website.git
   cd dramaturge-website
   ```

2. **Install Jekyll and dependencies**
   ```
   gem install jekyll bundler
   bundle install
   ```

3. **Start the development server**
   ```
   bundle exec jekyll serve
   ```

4. **View the site locally**
   Open your browser and go to http://localhost:4000

### Customization

1. **Update the _config.yml file**
   - Change the site title, email, and description
   - Update social media links

2. **Replace placeholder content**
   - Replace the placeholder text in index.md, about.md, and contact.md
   - Add your professional headshot to assets/images/
   - Add production photos to assets/images/productions/

3. **Set up the contact form**
   - Create an account at [Formspree](https://formspree.io/)
   - Get your form ID
   - Update the form action in contact.md with your Formspree ID

4. **Customize colors and styling**
   - Edit the color variables at the top of assets/css/main.scss to match your personal brand

## Deployment to GitHub Pages

1. **Create a GitHub repository**
   Create a new repository on GitHub named `yourusername.github.io`

2. **Push your code to GitHub**
   ```
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository settings
   - Scroll down to the GitHub Pages section
   - Select the main branch as the source
   - Click Save

4. **View your live site**
   After a few minutes, your site will be live at `https://yourusername.github.io`

## Maintenance

To make updates to your site:

1. Edit the relevant files locally
2. Commit your changes: `git commit -am "Update description"`
3. Push to GitHub: `git push origin main`
4. GitHub will automatically rebuild and deploy your site

## Additional Resources

- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Formspree Documentation](https://formspree.io/documentation/)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

# Dramaturge Website Project Structure

This is a Jekyll website for a Dramaturge that will be hosted on GitHub Pages. Here's the complete file structure:

```
dramaturge-website/
├── _config.yml                  # Jekyll configuration file
├── _includes/                   # Reusable components
│   ├── footer.html
│   ├── header.html
│   └── navigation.html
├── _layouts/                    # Page templates
│   ├── default.html
│   └── page.html
├── _sass/                       # Sass partials
│   ├── _base.scss
│   ├── _layout.scss
│   └── _variables.scss
├── assets/                      # Static assets
│   ├── css/
│   │   └── main.scss
│   ├── js/
│   │   ├── carousel.js
│   │   └── contact-form.js
│   └── images/
│       ├── productions/         # Carousel images
│       │   ├── production1.jpg  # You'll need to add actual production images
│       │   └── production2.jpg
│       └── headshot.jpg         # You'll need to add an actual headshot
├── index.md                     # Homepage
├── about.md                     # About page
├── contact.md                   # Contact page
├── .gitignore                   # Git ignore file
└── README.md                    # Project documentation
```

This structure follows Jekyll's convention and will make it easy to maintain and extend the website in the future.