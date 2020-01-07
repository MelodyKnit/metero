class getText {
    constructor() {
        alert('制作不易，还请扫码支持')
        this.$ = e => document.querySelector(e);
        this.$c = e => document.createElement(e);
        this.$a = e => document.querySelectorAll(e);
        this.table = new Object();
        this.txt = this.$('.txt');
        this.text = this.$('.text');
        this.types = this.$a('.types');
        this.option = this.$a('.types option')
        this.txt.oninput = e => this.oninput();
        for (let i of this.option) this.table[i.value] = window[i.value];
        this.types[0].addEventListener('input', () => this.getTable());
        this.types[1].addEventListener('input', () => this.getTables());
        this.getTable()
    }
    getTable() {
        this.types[1].innerHTML = '';
        let value = this.table[this.types[0].value];
        for (let i in value) {
            if (i !== 'table') {
                let option = this.$c('option');
                option.value = i;
                option.innerText = value.table[i];
                this.types[1].appendChild(option);
            };
        };
        this.getTables()
    };
    getTables() {
        this.values = this.table[this.types[0].value][this.types[1].value];
    }
    puth(i) {
        switch (i) {
            case 'top':
                return '题目'
            case 'answer':
                return '答案'
            case 'option':
                return '选项'
        }
    }
    oninput(e) {
        let value = this.txt.value;
        if (value) {
            this.text.innerHTML = '';
            this.values.forEach(e => {
                if (RegExp(value).test(e.top)) {
                    let ul = this.$c('ul');
                    let txt = e.top;
                    for (let i in e) {
                        let li = this.$c('li');
                        let p = this.$c('p');
                        p.innerHTML = typeof e[i] == 'object' ? e[i].join('<br>') : i == 'top' ? txt.replace(RegExp(value), '<font color="red">' + value + '</font>') : e[i];
                        li.innerHTML += this.puth(i) + '：';
                        li.appendChild(p);
                        ul.appendChild(li);
                    }
                    this.text.appendChild(ul);
                }
            })
        }
    }
}
