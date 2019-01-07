<template>
    <nav class="navbar navbar-expand-md  navbar-light bg-light">
        <div class="container">
            <div class="collapse navbar-collapse" id="navbarMenu">
                <ul class="navbar-nav mx-auto">
                    <li class="menu-item" v-for="(item, index) in navmenu" 
                    :key=index
                    v-bind:class="{ 'dropdown': item.hasSubmenu }"
                    @mouseover="mouseOver(item)"
                    @click="toggleDropdown(item)"
                    >   
                        <div v-if="!item.hasSubmenu" > 
                            <router-link :to=item.path class="nav-link" exact-active-class="active">{{item.name}}</router-link>
                        </div>
                        <div v-else>
                            <a class="nav-link dropdown-toggle">{{item.name}}</a>
                        </div>

                        <div class="dropdown-menu" v-show="item.hasSubmenu && item.isSubmenuOpen">
                            <router-link :to=subitem.path class="dropdown-item" v-for="(subitem, subindex) in item.submenu" :key=subindex>
                                {{subitem.name}}
                            </router-link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>

export default {
    name: 'NavMenu',
    data () {
        return {
            navmenu:[
                {
                    name: "Home",
                    path: "/",
                },
                {
                    name: "Travel",
                    path: "/travel",
                    hasSubmenu: true,
                    isSubmenuOpen: false,
                    submenu: [
                        {
                            name: "Asia",
                            path: "/"
                        },
                        {
                            name: "Europe",
                            path: "/"
                        },
                        {
                            name: "America",
                            path: "/"
                        }
                    ]
                },
                {
                    name: "About",
                    path: "/about",
                },
                {
                    name: "Contact",
                    path: "/contact",
                }
            ]
        }
    },
    methods:{
        mouseOver: function(item){
            console.log(this.showMobileNav)
            if(item.hasSubmenu){
                item.isSubmenuOpen = true;
            } 
        },
        toggleDropdown: function(item){
            if(item.hasSubmenu){
                item.isSubmenuOpen = !item.isSubmenuOpen;
            }
        }
    },
    computed:{
        showMobileNav:function(){
            return this.$store.state.showMobileNav
        }
    }
}
</script>
