import { HasFormatter } from "../interface/HasFormatter";

class ListTemplate {

    constructor(private ulContainer: HTMLUListElement) { }

    render(item: HasFormatter, heading: string, position: 'start' | 'end') {

        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        const p = document.createElement('p');

        h4.innerHTML = heading;
        p.innerHTML = item.format();

        li.append(h4);
        li.append(p);

        position === 'start'
            ? this.ulContainer.prepend(li)
            : this.ulContainer.append(li)
    }
}

export default ListTemplate;