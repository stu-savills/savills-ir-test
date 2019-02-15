(function() {
  const pageCtrl = {
    async init() {
      this.setReferences();
      await this.implementMarkup('header', this.headerContainer);
      await this.implementMarkup('footer', this.footerContainer);
      this.setCoreJavaScript();
    },

    setReferences() {
      this.documentHead = document.head;
      this.headerContainer = document.getElementById('header');
      this.footerContainer = document.getElementById('footer');
    },

    async fetchMarkup(element) {
      const response = await fetch(`views/${element}.html`);
      return response.text();
    },

    async implementMarkup(section, container) {
      return new Promise(async (resolve) => {
        const htmlString = await this.fetchMarkup(section);
        const element = document.createElement('div');

        element.innerHTML = htmlString.trim();
        container.append(element);
        resolve();
      });
    },

    setCoreJavaScript() {
      const script = document.createElement('script');

      script.src = 'https://admin.euro.savills.co.uk/_js/savills.core.js';
      this.documentHead.appendChild(script);
    }
  };

  pageCtrl.init();
}());
