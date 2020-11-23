<template>
    <!-- App.vue -->

    <v-app>
        <v-app-bar fixed dark color="deep-purple" app>
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
            <v-toolbar-title>Title</v-toolbar-title>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" fixed temporary app>
            <v-list nav dense>
                <v-list-item-group
                    v-model="group"
                    active-class="deep-purple--text text--accent-4"
                >
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-home</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Home</v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-account</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Account</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
        <v-main style="margin-top: 80px; padding:10px;">
            <v-row no-gutters>
                <v-container>
                    <!-- If using vue-router -->
                    <router-view></router-view>
                </v-container>
            </v-row>
        </v-main>
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            items: [
                { title: "Dashboard", icon: "mdi-view-dashboard" },
                { title: "Photos", icon: "mdi-image" },
                { title: "About", icon: "mdi-help-box" }
            ],
            right: null,
            drawer: false,
            group: null,
            mini: true
        }
    }
}
</script>
