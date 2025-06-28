# WONA GitHub Website

A Jekyll-based static website for Watch Out News Agency.

## Project Structure

### Root Files
- `_config.yml` - Jekyll configuration file with site settings, plugins, and build options
- `index.html` - Homepage template
- `404.html` - Custom 404 error page
- `Gemfile` - Ruby dependencies specification
- `Gemfile.lock` - Locked dependency versions
- `sitemap.xml` - XML sitemap for search engines
- `atom.xml` - RSS/Atom feed for content syndication
- `favicon.ico` - Website favicon
- `CNAME` - Custom domain configuration for GitHub Pages

### Directories

#### `_includes/`
Reusable HTML components that can be included in layouts and pages:
- `cat_header.html` - Category page header
- `footer.html` - Site footer
- `google_analytics.html` - Google Analytics tracking code
- `head.html` - HTML head section with meta tags and stylesheets
- `header.html` - Site header and navigation
- `horizontal_post.html` - Horizontal post layout component
- `navbar.html` - Navigation bar component

#### `_layouts/`
Page templates that define the structure for different content types:
- `category.html` - Template for category archive pages
- `layout.html` - Base layout template
- `post.html` - Individual blog post template

#### `_posts/`
Markdown files containing blog posts and articles (follows Jekyll naming convention: `YYYY-MM-DD-title.md`)

#### `_sass/`
SCSS stylesheets organized by component:
- `bootstrap/` - Bootstrap framework styles
- `_bootstrap.scss` - Bootstrap imports
- `css/` - Custom stylesheets
  - `base.scss` - Base styles and variables
  - `fontawesome.min.css` - Font Awesome icons
  - `mobile.css` - Mobile-responsive styles
  - `posts.css` - Post-specific styling
  - `pure.css` - Pure CSS framework
  - `pygments.css` - Syntax highlighting styles
  - `table.css` - Table styling

#### Content Directories
- `edc/` - EDC (Editorial Development Cell) related content
- `fonts/` - Custom web fonts
- `getinvolved/` - Pages about getting involved with WONA
- `guide/` - User guides and documentation
- `images/` - Static images and media files
- `js/` - JavaScript files
- `news/` - News articles and posts
- `team/` - Team member profiles and information

#### Styling
- `table.css` - Standalone CSS file for table styling

## Installation

### Prerequisites
- [Docker](https://www.docker.com/get-started) installed on your system
- Git (to clone the repository)

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/WatchOutNewsAgency/wona.github.com.git
   cd wona.github.com
   ```

2. **Run with Docker**
   ```bash
   docker run --rm -it \
     -v "${PWD}:/srv/jekyll" \
     -p 4000:4000 \
     jekyll/jekyll:4 \
     jekyll serve --host 0.0.0.0
   ```
   - If you might face error in dockerization use this instead:  jekyll/jekyll:3
   - This command will start a Jekyll server, serving your site at 4000 port
   - If any other error, all the best debugging
3. **Access the site**
   - Open your browser and navigate to `http://localhost:4000`
   - The site will automatically rebuild when you make changes to files

### Docker Command Explanation
- `--rm` - Automatically remove the container when it exits
- `-it` - Interactive terminal mode
- `-v "${PWD}:/srv/jekyll"` - Mount current directory to Jekyll's working directory in container
- `-p 4000:4000` - Map port 4000 from container to host
- `jekyll/jekyll:4` - Use Jekyll Docker image version 4
- `jekyll serve --host 0.0.0.0` - Start Jekyll development server accessible from all network interfaces

### Development Notes
- Changes to `_config.yml` require a server restart
- New posts in `_posts/` will be automatically detected
- CSS/SCSS changes will trigger automatic regeneration
- Press `Ctrl+C` to stop the development server

### Troubleshooting
- If port 4000 is already in use, change `-p 4000:4000` to `-p 4001:4000` and access via `http://localhost:4001`
- On Windows, use PowerShell or Command Prompt
- Ensure Docker Desktop is running before executing the command

## Repository

[https://github.com/WatchOutNewsAgency/wona.github.com](https://github.com/WatchOutNewsAgency/wona.github.com)