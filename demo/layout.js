class ComponentLoader {
  static async loadComponent(filePath, selector) {
    try {
      const res = await fetch(filePath);
      const html = await res.text();

      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = html;

      const element = tempDiv.querySelector(selector);

      if (!element) {
        throw new Error(`Element "${selector}" not found in ${filePath}`);
      }

      return element;
    } catch (error) {
      console.error(`Error loading component from ${filePath}:`, error);
      return null;
    }
  }

  static async loadHeader(filePath = "header.html") {
    const header = await this.loadComponent(filePath, "header");
    if (header) {
      // Remove existing header
      const existingHeader = document.querySelector("header");
      if (existingHeader) {
        existingHeader.remove();
      }

      // Add to top of body
      document.body.prepend(header);
      console.log("Header loaded successfully");
    }
    return header;
  }

  static async loadFooter(filePath = "footer.html") {
    const footer = await this.loadComponent(filePath, "footer");
    if (footer) {
      // Remove existing footer
      const existingFooter = document.querySelector("footer");
      if (existingFooter) {
        existingFooter.remove();
      }

      // Add to bottom of body
      document.body.appendChild(footer);
      console.log("Footer loaded successfully");
    }
    return footer;
  }

  static async loadLayout(
    headerPath = "header.html",
    footerPath = "footer.html"
  ) {
    try {
      // Load cả header và footer cùng lúc
      const [header, footer] = await Promise.all([
        this.loadHeader(headerPath),
        this.loadFooter(footerPath),
      ]);

      return { header, footer };
    } catch (error) {
      console.error("Error loading layout:", error);
      return { header: null, footer: null };
    }
  }
}

// Usage
const initLayout = async () => {
  await ComponentLoader.loadLayout();
};

// Initialize
initLayout();
