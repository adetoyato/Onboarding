<template>
    <div class="welcome-wrapper wrapped">
        <div class="welcome-content">
            <div>
                <h2 v-if="post.welcomeScreen"> {{post.title}} </h2>
                <h2 v-else> {{post.title}} </h2>
                <p v-if="post.welcomeScreen"> {{post.message}}</p>
                <p class="content-preview" v-else> {{post.msgHTML}}</p>
                <b-button-group>
                <b-button pill v-if="post.welcomeScreen" class="link d-flex justify-content-center" href="login" variant="light"> Login </b-button>
                <b-button pill v-if="post.welcomeScreen" class="link1 d-flex align-content-center" href="register" variant="light"> Register </b-button>
                <!-- <b-button pill class="link2" v-else to='../views/Login.vue'>
                    View Destinations
                </b-button> -->
                </b-button-group>
                
                <!--<router-link class="link link-light" v-if="post.welcomeScreen" :to="{ name: 'login' }">
                    Login/Register
                </router-link> -->
                
            </div>
        </div>
            <div class="welcome-photo">
                <img v-if="post.welcomeScreen" :src="require(`../assets/img/${post.photo}.jpg`)" alt="">
                <img v-else :src="require(`../assets/img/${post.coverPhoto}.jpg`)" alt="">
            </div>
    </div>
</template>

<script>
export default {
    name: "Welcome",
    props: ["post"],
    components: {
    }
}
</script>

<style lang="scss" scoped>

.welcome-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    @media(min-width: 500px) {
        min-height: 465px;
        max-height: 465px;
        flex-direction: row;
    }

    .welcome-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 4;
        order: 2;
        @media(min-width: 500px) {
            order: 1;
        }
        @media(min-width: 500px) {
            flex: 3;
        }
        div {
            max-width: 375px;
            padding: 72px 24px;
            @media(min-width: 500px) {
                padding: 0 24px;
            }

            h2 {
                font-size: 32px;
                font-weight: 300;
                font-family: "Impact";
                text-align: center;
                text-transform: uppercase;
                margin-bottom: 24px;
                @media(min-width: 700px) {
                    font-size: 40px;
                }
            }
            
            p {
                font-size: 18px;
                font-family: "arial";
                padding-left: 90px;
                font-weight: 300;
                line-height: 1.7;
            }

            .content-preview {
                font-size: 18px;
                padding-left: 50px;
                max-height: 24px;
                width: 250px;
                white-space: nowrap;
                text-overflow: ellipsis;
            }

            .link {
                display: inline-flex;
                align-items: center;
                font-family: helvetica;
                text-transform: none;
                margin-top: 20px;
                margin-left: 50px;
                width: 80px;
                padding-bottom: 4px;
                //padding-left: 4px;
                border-bottom: 1px solid transparent;
                transition: .8s ease-in all;

                &:hover {
                    border-bottom-color: transparent;
                    color: #e65b0b;
                }
            }

            .link-light {
                &:hover {
                    border-bottom-color: transparent;

                }
            }
            .link1 {
                display: inline-flex;
                align-items: center;
                font-family: helvetica;
                text-transform: none;
                margin-top: 20px;
                margin-left: 20px;
                padding-bottom: 4px;
                //padding-left: 4px;
                border-bottom: 1px solid transparent;
                transition: .8s ease-in all;

                &:hover {
                    border-bottom-color: transparent;
                    color: #e65b0b;
                }
            }

            .link1-light {
                &:hover {
                    border-bottom-color: transparent;

                    }
                }

            .link2 {
                display: inline-flex;
                align-items: center;
                font-family: helvetica;
                margin-top: 20px;
                margin-left: 70px;
                padding-bottom: 4px;
                //padding-left: 4px;
                border-bottom: 1px solid transparent;
                transition: .8s ease-in all;

                &:hover {
                    border-bottom-color: transparent;
                    color: #e65b0b;
                }
            }

            .link2-light {
                &:hover {
                    border-bottom-color: transparent;

                }
            }
        }
    }

    .welcome-photo {
        order: 1;
        flex: 3;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

        @media(min-width: 500px) {
            order: 2;
        }
        @media(min-width: 500px) {
            flex: 4;
        }

        img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    &:nth-child(even) {
        .welcome-content {
            order: 2;
        }
        .welcome-photo {
            order: 1;
        }
    }
}

.wrapped:first-child {
    .welcome-content {
        background-color: #2e2e2e;
        color: #fff;
    }
}
</style>
