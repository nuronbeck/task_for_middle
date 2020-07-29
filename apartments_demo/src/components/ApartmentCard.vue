<template>
    <div class="apartment_card">
        <div class="apartment__relationships">
        <div class="related_user">
            <span class="user_icon_block">
            <span class="user__icon">
                <i v-if="apartment.relationships.type == 'agent'" class="fas fa-user-tie"></i>
                <i v-else class="far fa-user"></i>
            </span>
            <span class="user_type">{{ apartment.relationships.type }}</span>
            </span>
            <span class="username_title text-bold">
            {{ apartment.relationships.attributes.first_name }}
            {{ apartment.relationships.attributes.last_name }}
            {{ apartment.relationships.attributes.middle_name }}
            </span>
        </div>
        </div>
        <div class="apartment__info">
        <div class="row__card_info">
            <div class="apartment__attrs">
            <div class="apartment_id">№ {{ apartment.id }}</div>
            <div class="apartment_title text-bold">{{ apartment.attributes.title }}</div>
            <div class="apartment_prev">
                <div class="apartment__type">Тип: <span class="text-bold">{{ apartment.type }}</span></div>
                <div class="apartment__rooms">Кол. комнат: <span class="text-bold">{{ apartment.attributes.rooms }}</span></div>
            </div>
            </div>
        </div>
        <div class="row__card_info">
            <div class="apartment_city"><i class="fas fa-map-marked-alt location_icon"></i> Город: <span class="text-bold">{{ apartment.attributes.address.city }}</span></div>
            <div class="apartment_street"><i class="fas fa-street-view location_icon"></i> Улица: <span class="text-bold">{{ apartment.attributes.address.street }}</span></div>
            <div class="apartment_house"><i class="fas fa-building location_icon"></i> Дом: <span class="text-bold">{{ apartment.attributes.address.house }}</span></div>
            <div class="apartment_house"><i class="fas fa-list-ol location_icon"></i> Номер: <span class="text-bold">{{ apartment.attributes.address.room }}</span></div>
        </div>
        </div>
        <div class="card_actions">
        <span class="btn_container">
            <button @click="toggle_like(apartment.id)">
                <span v-show="liked_apartments.includes(apartment.id)">
                    <i class="btn_icon fas fa-heart active" ></i>
                </span>
                <span v-show="!liked_apartments.includes(apartment.id)">
                    <i class="btn_icon far fa-heart" ></i>
                </span>
                Нравится
            </button>
            <transition name="fade">
                <span v-if="liked_apartments.includes(apartment.id)" class="like_count">1</span>
            </transition>
        </span>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    props: {
        apartment: Object
    },
    name: 'ApartmentCard',
    computed: {
        ...mapGetters({
            liked_apartments: 'apartments/liked_apartments'
        })
    },
    methods: {
        toggle_like(apartment_id){
            this.$store.dispatch('apartments/LIKE_CARD', apartment_id)
        }
    }
}
</script>

<style>
.text-bold{
  font-weight: bold;
}
.apartment_card{
  border-radius: 7px;
  box-shadow: 1px 1px 7px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.15);
  transition: 0.5s;
  width: 450px;
  margin: 10px;
}
.apartment_card:hover{
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.3);
}
.apartment_card .apartment__relationships{
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
}
.apartment_card .related_user{
  display: flex;
  align-items: center;
  padding: 7px;
}
.apartment_card .related_user .user_icon_block{
  position: relative;
  min-width: 2.3rem;
  height: 2.3rem;
}
.apartment_card .related_user .user_icon_block span{
  position: absolute;
  top: 0;
  left: 0;
}
.apartment_card .related_user .user_icon_block .user__icon{
  color: #fff;
  font-size: 1.2rem;
  background-color: #2c3e50;
  border-radius: 50%;
  width: 2.3rem;
  height: 2.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.apartment_card .related_user .user_icon_block .user_type{
  font-weight: bold;
  display: block;
  left: 0px;
  background-color: yellow;
  padding: 2px 10px 4px 16px;
  transition: 0.3s;
  border-radius: 12px 2px 7px 0;
  transform: scale(0);
}
.apartment_card .related_user .user_icon_block .user__icon:hover ~ .user_type{
  display: block;
  transform: scale(1);
  left: 30px;
}
.apartment_card .related_user .username_title{
  margin-left: 12px;
  font-weight: bold;
}
.apartment_card .apartment__info{
  display: flex;
  width: 100%;
}
.apartment_card .apartment__info .row__card_info{
  padding-bottom: 25px;
  min-height: 100px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  box-sizing: border-box;
}
.apartment_card .apartment__info .row__card_info:nth-child(1){
  position: relative;
  background-color: #fdf5cc;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding-top: 45px;
  width: 40%;
}
.apartment_card .apartment__info .row__card_info:nth-child(1) .apartment_id{
  position: absolute;
  top: 5px;
  left: 0;
  padding: 3px 10px;
  color: #fff;
  background-color: #42b983;
  border-radius: 0 180px 180px 0;
}
.apartment_card .apartment__info .row__card_info:nth-child(1) .apartment_title{
  font-weight: bold;
  font-size: 1.2rem;
}
.apartment_card .apartment__info .row__card_info:nth-child(1) .apartment_prev{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 0 0 28px;
}
.apartment_card .apartment__info .row__card_info:nth-child(2){
  align-items: flex-start;
  padding: 0 0 0 25px;
  box-sizing: border-box;
}
.apartment_card .apartment__info .row__card_info:nth-child(2) div{
  padding-top: 10px;
}
.apartment_card .apartment__info .row__card_info:nth-child(2) div .location_icon{
  min-width: 25px;
  color: #42b983;
}
.apartment_card .card_actions{
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 7px;
}
.apartment_card .card_actions button{
  cursor: pointer;
  padding: 8px;
  border: none;
  outline: none;
  color: #696969;
  background-color: #fff;
  border-radius: 0px 0 0 7px;
}
.apartment_card .card_actions span{
  color: #696969;
}
.apartment_card .card_actions .btn_icon.active{
  color: #28d586;
}
@media screen and (max-width: 996px) {
  .apartment_card{
    width: 420px;
  }
}
@media screen and (max-width: 940px) {
  .apartment_card{
    width: 100%;
  }
  .apartment_card .apartment__info .row__card_info:nth-child(1){
    width: 50%;
  }
  .apartment_card .apartment__info .row__card_info:nth-child(2){
    width: 50%;
  }
  .apartment_card .apartment__info .row__card_info:nth-child(1) .apartment_prev{
    padding: 16px 0 0 20px;
  }
}
@media screen and (max-width: 576px) {
  .apartment_card{
    width: 100%;
  }
  .apartment_card .apartment__info{
    flex-direction: column;
    justify-content: center;
  }
  .apartment_card .apartment__info .row__card_info:nth-child(1){
    width: 100%;
    min-height: 50px;
  }
  .apartment_card .apartment__info .row__card_info:nth-child(2){
    width: 100%;
    padding: 15px 0;
    padding-left: 25%;
  }
}
</style>