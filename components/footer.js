class SnapFooter extends HTMLElement {
    connectedCallback()
    {
        this.innerHTML = `
            <footer>
                <p>Snap Footer</p>
            </footer>
        `
    }
}

customElements.define('snap-footer', SnapFooter);