class SnapHeader extends HTMLElement {
    connectedCallback()
    {
        this.innerHTML = `
            <header>
                <h1>Snap Header</h1>
            </header>
        `
    }
}

customElements.define('snap-header', SnapHeader);