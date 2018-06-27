var app = new Vue({
    el: '#app',
    data: {
        page: false,
        tags: '01',
        content: [
            {
                num: '01',
                title_1: 'LINEN',
                title_2: 'BLAZER',
                backgroundImage: 'https://images.unsplash.com/photo-1513827379601-9dba5099a3f9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1acdd78f34ee75aade9e313251bb1695&auto=format&fit=crop&w=634&q=80',
                backgroundImage2: 'https://images.unsplash.com/photo-1513825887434-bebd3614b1c4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9b781ebfdabce7ff654f14b8992d65e2&auto=format&fit=crop&w=634&q=80',
                backgroundImage3: 'https://images.unsplash.com/photo-1513827110473-34697d0aa3c1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3342a9ee630713e90f86777fceef9f6f&auto=format&fit=crop&w=634&q=80'
            },
            {
                num: '02',
                title_1: 'FREELIFT',
                title_2: '',
                backgroundImage: 'https://images.unsplash.com/photo-1514632542677-48fae74a01b2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cf412aceb1d689765e387d30fca7210a&auto=format&fit=crop&w=334&q=80',
                backgroundImage2: 'https://images.unsplash.com/photo-1514632752825-5d1b2eac4990?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7b3f61c901325cbb0e206db330774b30&auto=format&fit=crop&w=637&q=80',
                backgroundImage3: 'https://images.unsplash.com/photo-1514632597045-f74308c6418d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=77a184c66beb9722f8da9cb9055811c5&auto=format&fit=crop&w=1050&q=80',
            },
            {
                num: '03',
                title_1: 'SUPER',
                title_2: 'SKINNY',
                backgroundImage: 'https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a0f994eef47e5fb1a67849703cc961b3&auto=format&fit=crop&w=750&q=80',
                backgroundImage2: 'https://images.unsplash.com/photo-1496347015999-56459d63a30a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cb098d2434239b51a158dfba346abed9&auto=format&fit=crop&w=1050&q=80',
                backgroundImage3: 'https://images.unsplash.com/photo-1496360166961-10a51d5f367a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2abac325ee96218afb69e1fb0cb23829&auto=format&fit=crop&w=634&q=80',
            },
            {
                num: '04',
                title_1: 'DENIM',
                title_2: '',
                backgroundImage: 'https://images.unsplash.com/photo-1484516758160-69878111a911?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=39466d66952b133d5a5cff642b970d05&auto=format&fit=crop&w=387&q=80',
                backgroundImage2: 'https://images.unsplash.com/photo-1484516250254-ef75428f6c0d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a7511916f756f1c160508fd0a043aa2e&auto=format&fit=crop&w=687&q=80',
                backgroundImage3: 'https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8d5d399b6511bcc319334a3dec292f9f&auto=format&fit=crop&w=687&q=80',
            },
            {
                num: '05',
                title_1: 'SWEATSHIRTS',
                title_2: '',
                backgroundImage: 'https://images.unsplash.com/photo-1525448198276-222de3961638?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=43fb25556cdbd191e520c7f28739e40d&auto=format&fit=crop&w=750&q=80',
                backgroundImage2: 'https://images.unsplash.com/photo-1522774490970-e2baed0c5a39?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=004fdb7c4c8cc65e8d0feff2291987ca&auto=format&fit=crop&w=634&q=80',
                backgroundImage3: 'https://images.unsplash.com/photo-1523387013095-3ff83bac2161?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=056b5744b59747d46e23371b820a9d63&auto=format&fit=crop&w=1420&q=80',
            },
            {
                num: '06',
                title_1: 'VINTAGE',
                title_2: 'DENIM',
                backgroundImage: 'https://images.unsplash.com/photo-1519406709381-c1f293304b28?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=98c497a29f229085d9574ee8b6eeef8c&auto=format&fit=crop&w=334&q=80',
                backgroundImage2: 'https://images.unsplash.com/photo-1519406728390-b536d7be138f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=787976dcde91781727f476692b203ee9&auto=format&fit=crop&w=634&q=80',
                backgroundImage3: 'https://images.unsplash.com/photo-1519406686401-e9ef2420c15b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f48976340279ffce098f21bb046acc87&auto=format&fit=crop&w=1050&q=80',
            },
            {
                num: '07',
                title_1: 'EDITION',
                title_2: '',
                backgroundImage: 'https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=63ff45d79414b3166b08b800a32018be&auto=format&fit=crop&w=334&q=80',
                backgroundImage2: 'https://images.unsplash.com/photo-1520432348192-9cdc52574c87?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f2d0fcd62ff04064ea33280b65877c8c&auto=format&fit=crop&w=634&q=80',
                backgroundImage3: 'https://images.unsplash.com/photo-1520432187697-575404b3fc84?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e59000538c87c2b1a053555c2a2e9603&auto=format&fit=crop&w=500&q=60',
            }
        ]
    },
    methods: {
        //利用page true false顯示所屬頁面
        toPage(item){
            console.log(item);
            this.page = true;
            window.document.body.scrollTop = 0;
            window.document.documentElement.scrollTop = 0;
        },
        toHome(){
            this.page = false
        }
    },
    computed: {
        // 過濾清單,指向所屬分頁
        filter(){
            if(this.tags == '01'){
                var newData = [];
                this.content.forEach(function(item){
                    if (item.num == '01'){
                        newData.push(item);
                    }
                });
                return newData;
            } else if (this.tags == '02'){
                var newData = [];
                this.content.forEach(function (item) {
                    if (item.num == '02') {
                        newData.push(item);
                    }
                });
                return newData;
            } else if (this.tags == '03') {
                var newData = [];
                this.content.forEach(function (item) {
                    if (item.num == '03') {
                        newData.push(item);
                    }
                });
                return newData;
            } else if (this.tags == '04') {
                var newData = [];
                this.content.forEach(function (item) {
                    if (item.num == '04') {
                        newData.push(item);
                    }
                });
                return newData;
            } else if (this.tags == '05') {
                var newData = [];
                this.content.forEach(function (item) {
                    if (item.num == '05') {
                        newData.push(item);
                    }
                });
                return newData;
            } else if (this.tags == '06') {
                var newData = [];
                this.content.forEach(function (item) {
                    if (item.num == '06') {
                        newData.push(item);
                    }
                });
                return newData;
            }else if (this.tags == '07'){
                var newData = [];
                this.content.forEach(function (item) {
                    if (item.num == '07') {
                        newData.push(item);
                    }
                });
                return newData;
            }
        }
    }
})