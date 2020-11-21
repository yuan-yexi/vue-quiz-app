<template>
    <!-- App.vue -->

    <v-app>
        <v-container>
            <v-row no-gutters>
                <v-col cols="2" sm="1" md="1">
                    <v-navigation-drawer
                        v-model="drawer"
                        :mini-variant.sync="mini"
                        absolute
                        permanent
                    >
                        <v-list-item class="px-2">
                            <v-list-item-avatar>
                                <v-img
                                    src="https://randomuser.me/api/portraits/men/85.jpg"
                                ></v-img>
                            </v-list-item-avatar>

                            <v-list-item-title>John Leider</v-list-item-title>

                            <v-btn icon @click.stop="mini = !mini">
                                <v-icon>mdi-chevron-left</v-icon>
                            </v-btn>
                        </v-list-item>

                        <v-divider></v-divider>

                        <v-list dense>
                            <v-list-item
                                v-for="item in items"
                                :key="item.title"
                                link
                            >
                                <v-list-item-icon>
                                    <v-icon>{{ item.icon }}</v-icon>
                                </v-list-item-icon>

                                <v-list-item-content>
                                    <v-list-item-title>{{
                                        item.title
                                    }}</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-navigation-drawer>
                </v-col>
                <v-col>
                    <!-- Provides the application the proper gutter -->
                    <v-container fluid>
                        <!-- If using vue-router -->
                        <router-view></router-view>
                    </v-container>
                </v-col>
            </v-row>
        </v-container>

        <v-footer app>
            App Footer
        </v-footer>
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
            drawer: true,
            group: null,
            mini: true
        }
    }
}
</script>
