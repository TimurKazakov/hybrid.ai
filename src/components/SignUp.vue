<template>
  <div class="SignUp">
    <h1 class="SignUp__title">
      Sign Up
    </h1>

    <form action="">
      <label for="name">
        Full Name
      </label>
      <input
        id="name"
        v-model="name"
        type="text"
        placeholder="Jonh Doe"
        :class="{'is-invalid' : $v.name.$error}"
        @input="$v.name.$touch()"
      >

      <label for="email">
        Email
      </label>

      <input
        id="email"
        v-model="email"
        type="email"
        placeholder="example@acme.com"
        @input="$v.email.$touch()"
        :class="{'is-invalid' : $v.email.$error}"
      >
        <label v-if="$v.email.$error" class="input__error-message" for="email">Enter valid password</label>
      <div
        class="icon__wrapper"
        @mouseenter="showTooltip"
        @mouseleave="closeTooltip"
      >
        <svg
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.2">
            <path
              d="M6.13983 0.166666C2.92324 0.166666 0.306499 2.7834 0.306499 6C0.306499 9.2166 2.92324 11.8333 6.13983 11.8333C9.35643 11.8333 11.9732 9.2166 11.9732 6C11.9732 2.7834 9.35643 0.166666 6.13983 0.166666ZM5.89678 9.40278C5.49428 9.40278 5.16761 9.07611 5.16761 8.67361C5.16761 8.27111 5.49428 7.94444 5.89678 7.94444C6.29928 7.94444 6.62594 8.27111 6.62594 8.67361C6.62594 9.07611 6.29928 9.40278 5.89678 9.40278ZM7.9924 5.08951C7.84219 5.33014 7.55685 5.60042 7.13587 5.90083C6.45483 6.40444 6.47331 6.51625 6.47331 6.97222H5.27893C5.27893 6.6159 5.27115 6.34222 5.46365 6.00924C5.58664 5.79583 5.81219 5.56882 6.13983 5.32868C6.5331 5.04771 6.91518 4.77694 6.91518 4.30542C6.91518 3.86354 6.53699 3.70604 6.09511 3.70604C5.64449 3.70604 5.13067 3.85333 4.55365 4.14792L4.06219 3.16111C5.11074 2.5734 6.76546 2.3075 7.67011 3.04396C8.33414 3.585 8.33803 4.53632 7.9924 5.08951Z"
              fill="#1E1A3E"
            />
          </g>
        </svg>
        <p class="SignUp__tooltip">
          Password must contain 8+ symbols, 1 special and 2 capital letters
        </p>
      </div>
      <label for="password">
        Password
        <a
          href="#"
          class="svg-wrapper"
          @mousedown="showPassword('password',$event)"
          @mouseup="closePassword('password',$event)"
        >
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
      </label>
      <input
        id="password"
        v-model="password"
        type="password"
        :class="{'is-invalid' : $v.password.$error}"
        @input="$v.password.$touch()"
      >


      <label for="reppassword">
        Repeat password
        <a
          ref="#"
          class="svg-wrapper"
          @mousedown="showPassword('reppassword',$event)"
          @mouseup="closePassword('reppassword',$event)"
        >
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
      </label>
      <input
        id="reppassword"
        v-model="reppassword"
        type="password"
        :class="{'is-invalid' : $v.reppassword.$error}"
        @input="$v.reppassword.$touch()"

      >

      <router-link  :disabled="$v.$invalid"   id="submit" :to='{name: "Main", params:{user:name}}' tag="input" type="submit" value="Sign Up">
        Sign Up
        {{!$v.$invalid ? sendToDatabase():null}}
      </router-link>
    </form>
    <div class="SignUp__footer">
      <h2>Already have account?</h2>
      <router-link to="SignIn">
        Sign In
      </router-link>
    </div>
  </div>
</template>

<script>
    import { email, minLength,required,sameAs } from 'vuelidate/lib/validators';
    export default {
        name: 'SignUp',

        data (){
            return {
                email:'',
                password:'',
                reppassword: '',
                name: '',
            };
        },
        validations:{
            name:{
                required
            },
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
                    }


                    return false;
                }
            },
            reppassword:{
                sameAs:sameAs('password')
            },
        },
        methods:{
            sendToDatabase (){
              localStorage.setItem(this.email, JSON.stringify({ name:this.name, password:this.password }));

            },

            showTooltip (event){
               event.currentTarget.lastChild.style.display='block';

            },
           closeTooltip (event){
               event.currentTarget.lastChild.style.display='none';

            },
            showPassword (id,event){
                document.getElementById(id).type='text';
                event.target.outerHTML= '<svg  viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M10 3.41667C12.3 3.41667 14.1667 5.28334 14.1667 7.58334C14.1667 8.00834 14.0834 8.41667 13.9667 8.80001L16.5167 11.35C17.675 10.325 18.5917 9.04167 19.1667 7.57501C17.725 3.92501 14.1667 1.33334 10 1.33334C8.94169 1.33334 7.92502 1.50001 6.96669 1.80834L8.77502 3.61667C9.16669 3.50001 9.57502 3.41667 10 3.41667ZM2.25834 0.63333C1.93334 0.95833 1.93334 1.48333 2.25834 1.80833L3.90001 3.45C2.55001 4.525 1.47501 5.94166 0.833344 7.58333C2.27501 11.2417 5.83334 13.8333 10 13.8333C11.2667 13.8333 12.475 13.5833 13.5917 13.15L15.8583 15.4167C16.1833 15.7417 16.7083 15.7417 17.0333 15.4167C17.3583 15.0917 17.3583 14.5667 17.0333 14.2417L3.44168 0.63333C3.11668 0.30833 2.58334 0.30833 2.25834 0.63333ZM10 11.75C7.70003 11.75 5.83336 9.88333 5.83336 7.58333C5.83336 6.94166 5.98336 6.33333 6.24169 5.8L7.55003 7.10833C7.52503 7.25833 7.50003 7.41666 7.50003 7.58333C7.50003 8.96666 8.61669 10.0833 10 10.0833C10.1667 10.0833 10.3167 10.0583 10.475 10.025L11.7834 11.3333C11.2417 11.6 10.6417 11.75 10 11.75ZM12.475 7.30834C12.35 6.14167 11.4334 5.23334 10.275 5.10834L12.475 7.30834Z" fill="#181C43"/> </svg>';

                return {};
            },
            closePassword (id,event){
                document.getElementById(id).type='password';
                event.target.outerHTML='<svg viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg" ><path fill-rule="evenodd" clip-rule="evenodd" d="M10.1398 0.333336C5.97317 0.333336 2.41484 2.925 0.973175 6.58334C2.41484 10.2417 5.97317 12.8333 10.1398 12.8333C14.3065 12.8333 17.8648 10.2417 19.3065 6.58334C17.8648 2.925 14.3065 0.333336 10.1398 0.333336ZM10.1398 10.75C7.83984 10.75 5.97317 8.88334 5.97317 6.58334C5.97317 4.28334 7.83984 2.41667 10.1398 2.41667C12.4398 2.41667 14.3065 4.28334 14.3065 6.58334C14.3065 8.88334 12.4398 10.75 10.1398 10.75ZM10.1398 4.08334C8.75651 4.08334 7.63984 5.2 7.63984 6.58334C7.63984 7.96667 8.75651 9.08334 10.1398 9.08334C11.5232 9.08334 12.6398 7.96667 12.6398 6.58334C12.6398 5.2 11.5232 4.08334 10.1398 4.08334Z" fill="#181C43" /></svg>';
                return {};
            }
        }

    };
</script>

<style scoped>
    .SignUp{
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .SignUp__title {
        margin-top: 15%;
        font-style: normal;
        font-weight: 800;
        font-size: 4.5em;
        line-height: 30px;
        text-align: center;
        letter-spacing: 0.02em;
        color: #181C43;
    }
    .icon__wrapper{
        position: relative;
    }
    .SignUp__tooltip{
        display: none;
        width: 750px;
        border-radius: 30px;
        position: absolute;
        right: -60%;
        top: -270%;
        padding: 20px;
        background: #181C43;
        color: white;
        font-weight: normal;
        font-size: 2.1em;
        /*line-height: 20px;*/
        align-items: center;
        text-align: center;
    }
    .SignUp__tooltip:after{
       content: "";
        bottom: -15%;
        right: 4%;
        position: absolute;
        width: 0;
        height: 0;
        border: 20px solid transparent;
        border-top-color: #181C43;
        border-bottom: 0;
    }

    label{
        position: relative;
    }

    .input__error-message{
        display: block;
        font-size: 1.5rem;
        color: #FF6683;

    }

    .svg-wrapper{
        position: absolute;
        top:170%;
        right: 0%;
        width:80px;
        height:70px;
        z-index: 10;
    }

    @media (min-width:1200px) {
        .svg-wrapper{
            top:210%;
           ;
        }
    }
    .icon__wrapper{
        position: relative;
        bottom: -50px;
        right: -85%;
        width:50px;
        height:50px;
        z-index: 10;
    }
    .SignUp__footer{
        display: flex;
        flex-direction: column;
        padding: 10px;
        min-height: 150px;

    }

  #submit:disabled{
    background: grey;
  }

</style>