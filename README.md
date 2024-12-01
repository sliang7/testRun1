# How to Use the Drag-and-Drop Portfolio Template

This guide explains how to use the portfolio template to add, customize, and manage your projects dynamically. The template is designed for students to embed code snippets, images, videos, or other elements as they complete new work.

---

## **Features**

- **Dynamic Content Blocks**: Add new sections for projects or work samples with the click of a button.
- **Customizable Content**: Easily embed videos, images, or code snippets.
- **Interactive Design**: Modify or remove blocks as needed.
- **Responsive Layout**: Portfolio adapts to different screen sizes.

---

## **How to Add Content**

1. **Clone or Download the Template**
   - Copy the `index.html`, `style.css`, and `script.js` files to your local project folder.

2. **Open the Portfolio in a Browser**
   - Open `index.html` in a web browser to see the template in action.

3. **Add a New Block**
   - Click the **"Add New Block"** button at the top of the page.
   - A new content block will appear with placeholder text and a text area for adding content.

4. **Customize the Block**
   - Replace the placeholder text (`New Project`, `Add your project description here`) with the actual title and description of your project.
   - Use the text area to paste:
     - **Code snippets**
     - **Embed code** (e.g., YouTube videos, CodePen projects)
     - **Images** (use an `<img>` tag)

5. **Remove a Block**
   - Click the **"Remove Block"** button inside a block to delete it.

---

## **Adding Embeds**

Here are examples of how to embed different types of content into your blocks:

### **Embed a YouTube Video**
Paste the following code into the text area:
```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>
```
### **Add an Image**

Use the following code to include an image:
```
<img src="assets/image.jpg" alt="Project Screenshot" width="100%">
```
### **Embed a CodePen**
Use this code to embed a live CodePen example:

```
<iframe height="300" style="width: 100%;" scrolling="no" title="CodePen Example" src="https://codepen.io/pen/embedded/example" frameborder="no"></iframe>
```
### **Customizing the Template**
- **Change Colors and Fonts:**

Open style.css and modify the header, main, and .content-block styles to match your preferred theme.
Add More Functionality:

- **Update script.js** to include advanced features like sorting blocks or saving layouts to local storage.
Publish Online:

- **Use platforms like GitHub Pages or Netlify to host your portfolio.**
## **Tips for Success**
- **Keep your portfolio organized** by adding meaningful titles and descriptions to each block.
- **Use high-quality images** and videos to showcase your work.
- **Regularly update** your portfolio with new projects as you complete them.