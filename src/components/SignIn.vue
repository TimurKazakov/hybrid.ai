<template>
  <div class="SignIn">
    <h1 class="SignIn__title">
      Sign In
    </h1>

    <form action=""  @click="checkFromDataBase($event)">
      <label for="email">
        Email
      </label>
      <input
              v-model="email"
              id="email"
              type="text"
              placeholder="example@acme.com"
              @input="$v.email.$touch()"
              :class="{'is-invalid' : $v.email.$error}"
      >


      <label for="password">
        Password
      </label>

      <input
              v-model="password"
              id="password"
              type="password"
              :class="{'is-invalid' : $v.password.$error}"
              @input="$v.password.$touch()"
      >
      <a @click.prevent class="svg-wrapper"
         @mousedown="showPassword"
         @mouseup="closePassword">
        <svg

                viewBox="0 0 20 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
        >
          <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.1398 0.333336C5.97317 0.333336 2.41484 2.925 0.973175 6.58334C2.41484 10.2417 5.97317 12.8333 10.1398 12.8333C14.3065 12.8333 17.8648 10.2417 19.3065 6.58334C17.8648 2.925 14.3065 0.333336 10.1398 0.333336ZM10.1398 10.75C7.83984 10.75 5.97317 8.88334 5.97317 6.58334C5.97317 4.28334 7.83984 2.41667 10.1398 2.41667C12.4398 2.41667 14.3065 4.28334 14.3065 6.58334C14.3065 8.88334 12.4398 10.75 10.1398 10.75ZM10.1398 4.08334C8.75651 4.08334 7.63984 5.2 7.63984 6.58334C7.63984 7.96667 8.75651 9.08334 10.1398 9.08334C11.5232 9.08334 12.6398 7.96667 12.6398 6.58334C12.6398 5.2 11.5232 4.08334 10.1398 4.08334Z"
                  fill="#181C43"
          />
        </svg>


      </a>

      <router-link   :disabled="$v.$invalid" id="submit" :to='this.wayTo' tag="input" type="submit" value="Sign In">
        Sign In
      </router-link>
    </form>

    <h2>Don`t have account yet?</h2>
    <router-link to="SignUp">
      Sign Up
    </router-link>

    <div id="SignIn__popup">
      <p>
        Wrong email or password
        <svg @click="closePopup" width="50" height="50" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 0.758309C10.925 0.433309 10.4 0.433309 10.075 0.758309L5.99998 4.82498L1.92498 0.749976C1.59998 0.424976 1.07498 0.424976 0.749976 0.749976C0.424976 1.07498 0.424976 1.59998 0.749976 1.92498L4.82498 5.99998L0.749976 10.075C0.424976 10.4 0.424976 10.925 0.749976 11.25C1.07498 11.575 1.59998 11.575 1.92498 11.25L5.99998 7.17497L10.075 11.25C10.4 11.575 10.925 11.575 11.25 11.25C11.575 10.925 11.575 10.4 11.25 10.075L7.17497 5.99998L11.25 1.92498C11.5666 1.60831 11.5666 1.07498 11.25 0.758309Z" fill="white"/>
        </svg>
      </p>


    </div>
  </div>
</template>

<script>
  import { email, minLength, required } from 'vuelidate/lib/validators';

  export default {

    validations:{
      email:{
        required,
        email
      },
      password:{
        required,
        minLength:minLength(8),
        symbolRequirements:function (password) {
          if  (/\.*[A-Z]\.*[A-Z]\.*/.test(password)){
            if ( /(?=.*[-+=!@#$%^&*])/.test(password)){
              return true;
            }
          }          return false;
        }
      },
    },
      data (){
        return {
          email: '',
          password: '',

        };
      },
      name: 'SignIn',
      computed:{
        wayTo () {
          const email = localStorage.getItem(this.email);
          if (email){
            const { name,password }= JSON.parse(email);
            if (this.password === password){
              return { name: 'Main', params: { user:name } };
            }
          } else {

            return  { name: 'signIn',
            };

          }
          return '/signIn';
        }
      },
      methods:{
        popup (){
          document.getElementById('SignIn__popup').style.display='block';
        },
        closePopup (){
          document.getElementById('SignIn__popup').style.display='none';
        },
        checkFromDataBase (event){
          if (event.target.id==='submit') {
              this.popup();
          }
        },
        showPassword (event){
          document.getElementById('password').type='text';
          event.target.outerHTML= '<svg  viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M10 3.41667C12.3 3.41667 14.1667 5.28334 14.1667 7.58334C14.1667 8.00834 14.0834 8.41667 13.9667 8.80001L16.5167 11.35C17.675 10.325 18.5917 9.04167 19.1667 7.57501C17.725 3.92501 14.1667 1.33334 10 1.33334C8.94169 1.33334 7.92502 1.50001 6.96669 1.80834L8.77502 3.61667C9.16669 3.50001 9.57502 3.41667 10 3.41667ZM2.25834 0.63333C1.93334 0.95833 1.93334 1.48333 2.25834 1.80833L3.90001 3.45C2.55001 4.525 1.47501 5.94166 0.833344 7.58333C2.27501 11.2417 5.83334 13.8333 10 13.8333C11.2667 13.8333 12.475 13.5833 13.5917 13.15L15.8583 15.4167C16.1833 15.7417 16.7083 15.7417 17.0333 15.4167C17.3583 15.0917 17.3583 14.5667 17.0333 14.2417L3.44168 0.63333C3.11668 0.30833 2.58334 0.30833 2.25834 0.63333ZM10 11.75C7.70003 11.75 5.83336 9.88333 5.83336 7.58333C5.83336 6.94166 5.98336 6.33333 6.24169 5.8L7.55003 7.10833C7.52503 7.25833 7.50003 7.41666 7.50003 7.58333C7.50003 8.96666 8.61669 10.0833 10 10.0833C10.1667 10.0833 10.3167 10.0583 10.475 10.025L11.7834 11.3333C11.2417 11.6 10.6417 11.75 10 11.75ZM12.475 7.30834C12.35 6.14167 11.4334 5.23334 10.275 5.10834L12.475 7.30834Z" fill="#181C43"/> </svg>';

          return {};
        },
        closePassword (event){
          document.getElementById('password').type='password';
          event.target.outerHTML='<svg viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path fill-rule="evenodd" clip-rule="evenodd" d="M10.1398 0.333336C5.97317 0.333336 2.41484 2.925 0.973175 6.58334C2.41484 10.2417 5.97317 12.8333 10.1398 12.8333C14.3065 12.8333 17.8648 10.2417 19.3065 6.58334C17.8648 2.925 14.3065 0.333336 10.1398 0.333336ZM10.1398 10.75C7.83984 10.75 5.97317 8.88334 5.97317 6.58334C5.97317 4.28334 7.83984 2.41667 10.1398 2.41667C12.4398 2.41667 14.3065 4.28334 14.3065 6.58334C14.3065 8.88334 12.4398 10.75 10.1398 10.75ZM10.1398 4.08334C8.75651 4.08334 7.63984 5.2 7.63984 6.58334C7.63984 7.96667 8.75651 9.08334 10.1398 9.08334C11.5232 9.08334 12.6398 7.96667 12.6398 6.58334C12.6398 5.2 11.5232 4.08334 10.1398 4.08334Z" fill="#181C43" /></svg>';
          return {};
        }
      }
    };
</script>

<style scoped>
  .SignIn{
    display: flex;
    flex-direction: column;
  }

  .SignIn__title {
    margin-top: 15%;
    font-style: normal;
    font-weight: 800;
    font-size: 4.5em;
    line-height: 30px;
    text-align: center;
    letter-spacing: 0.02em;
    color: #181C43;
  }
  #password{
    position: relative;
  }

  form{
    position: relative;
  }
  .svg-wrapper{
    position: absolute;
    bottom: 42%;
    right: 13%;
    width:80px;
    height:70px;
    /*    z-index: 10;*/
  }

  #submit:disabled{
    background: gray;
  }

  #SignIn__popup{
    display: none;
    margin-top: 15%;
    align-items: end;
    flex-grow: 2;

  }
  #SignIn__popup p{
    text-align: center;
  width: 80%;
    font-size: 2.5em;
    display: block;
    background:#FF6683 ;
    color: white;
    border-radius: 50px;
    padding: 5% 5%;
    margin: 5% auto;

  }

  #SignIn__popup p svg{
    margin-left: 20%;
    position: relative;
    right: 0;
  }
</style>