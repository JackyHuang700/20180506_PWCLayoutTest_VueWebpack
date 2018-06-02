<template>
  <div class="sidebar d-print-none">
    <nav class="sidebar-nav">
      <div slot="header"></div>
      <ul class="nav">
        <li class="nav-item" v-for="(item, index) in navItems">
          <template v-if="item.title">
            <SidebarNavTitle :name="item.name" />
          </template>
          <template v-else-if="item.divider">
            <li class="divider"></li>
          </template>
          <template v-else>
            <template v-if="item.children">
              <SidebarNavDropdown :name="item.name" :url="item.url" :icon="item.icon">
                <template v-for="(child, index) in item.children">
                  <template v-if="child.children">
                    <SidebarNavDropdown :name="child.name" :url="child.url" :icon="child.icon">
                      <li class="nav-item" v-for="(child, index) in item.children">
                        <SidebarNavLink :name="child.name" :url="child.url" :icon="child.icon" :badge="child.badge" />
                      </li>
                    </SidebarNavDropdown>
                  </template>
                  <template v-else>
                    <li class="nav-item">
                      <SidebarNavLink :name="child.name" :url="child.url" :icon="child.icon" :badge="child.badge" />
                    </li>
                  </template>
                </template>
              </SidebarNavDropdown>
            </template>
            <template v-else>
              <SidebarNavLink :name="item.name" :url="item.url" :icon="item.icon" :badge="item.badge" />
            </template>
          </template>
        </li>
      </ul>
      <slot></slot>
      <div slot="footer"></div>
    </nav>
  </div>
</template>
<script>
import SidebarNavDropdown from './SidebarNavDropdown'
import SidebarNavLink from './SidebarNavLink'
import SidebarNavTitle from './SidebarNavTitle'
export default {
  name: 'sidebar',
  props: {
    navItems: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  components: {
    SidebarNavDropdown,
    SidebarNavLink,
    SidebarNavTitle
  },
  methods: {
    handleClick (e) {
      e.preventDefault()
      e.target.parentElement.classList.toggle('open')
    }
  }
}
</script>

<style lang="css">
* {
  transition: all 0.3s linear;
}

.nav-link {
  cursor: pointer;
}

/* new write */
.sidebar {
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1),
    rgba(147, 199, 254, 0.49)
  );
}

.sidebar .nav-link {
  color: #536c79;
}

.navbar .sidebar .dropdown-toggle:hover,
.sidebar .nav-link:hover,
.sidebar .navbar .dropdown-toggle:hover {
  background: #13a6da;
  color: #fff;
}

.sidebar .nav-title {
  color: black;
}

.sidebar .nav-dropdown.open {
  /* background: rgba(32, 168, 216, 0.611764705882353); */
  /* background: rgba(255, 255, 255, 0.36); */
  background: rgba(19, 166, 218, 0.10823529411764706);
}

.sidebar .nav-dropdown.open .nav-link {
  /* color: #fff; */
  /* color: rgba(188, 236, 252, 0.4117647058823529); */
  /* background: rgba(27, 175, 228, 0.5803921568627451); */
  color: #536c79;
}

.sidebar .nav-link:hover.nav-link:hover {
  color: #fff;
}

.sidebar .nav-link.active.active {
  background: rgba(36, 160, 204, 0.5);
  color: white;
}

</style>
