<template>
    <div class="recordBox">
        <ul class="record">
            <li v-for="(record, index) in records" 
                :key="record.cata">
                <span class="cata">{{ record.cata }}</span>
                <span class="date">{{ record.date }}</span>
                <span class="price">{{ record.price }}元</span>
                <button @click="toggleRemove(record)">移除</button>
            </li>
        </ul>
        <h3>總計：{{ total }}</h3>
    </div>
</template>

<script>
export default {
    props:['records'],
    data(){
        return {

        }
    },
    methods: {
        toggleRemove(record){
            console.log('RecordList Toggle Event!')
            this.$emit('removeListItem',{
                record: record
            })
        }
    },
    computed: {
        total(){
            return this.records.reduce((total,record)=>total+record.price,0)
        }
    }
}
</script>

<style lang="scss">
@keyframes fadeIn{
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}
.recordBox{
    .record{
        li{
            display: flex;
            justify-content: space-between;
            align-items: center;
            border: 1px solid #808046;
            padding: 5px;
            margin-bottom: 10px;
            border-radius: 50px;
            animation: fadeIn 1s both;
            background-color: #fcf7bf;
            .cata{
                flex: 3;
                font-size: 20px;
                font-weight: 600;
                padding-left: 0.5em;
            }
            .date{
                flex: 2;
            }
            .price{
                text-align: right;
                flex: 1;
            }
            button{
                margin-left: 15px;
                margin-right: 10px;
            }
        }
    }
    h3{
        position: absolute;
        bottom: 5px;
        width: 100%;
        text-align: center;
        color: #ffffff;
    }
}
@media screen and (max-width: 480px) {
    .recordBox{
        .record{
            li{
                .cata{
                    flex: 3;
                }
                .date{
                    flex: 2;
                }
                .price{
                    flex: 2;
                }
            }
        }
    }
}
@media screen and (max-width: 380px) {
    .recordBox{
        .record{
            li{
                flex-wrap: wrap;
                justify-content: center;
                .cata{
                    flex: 2;
                }
                .date{
                    flex: 2;
                }
                .price{
                    flex: 2;
                }
            }
        }
    }
}
    
</style>
