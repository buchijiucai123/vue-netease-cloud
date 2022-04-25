<template>
    <nav>
        <router-link to="/login">
            <svg t="1650612873342"
                 class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1347" width="20" height="20"><path d="M849.1 128 174.9 128c-25.9 0-46.9 21-46.9 46.9l0 34.2c0 25.9 21 46.9 46.9 46.9l674.2 0c25.9 0 46.9-21 46.9-46.9l0-34.2C896 149 875 128 849.1 128z" p-id="1348"></path><path d="M849.1 768 174.9 768c-25.9 0-46.9 21-46.9 46.9l0 34.2c0 25.9 21 46.9 46.9 46.9l674.2 0c25.9 0 46.9-21 46.9-46.9l0-34.2C896 789 875 768 849.1 768z" p-id="1349"></path><path d="M849.1 448 174.9 448c-25.9 0-46.9 21-46.9 46.9l0 34.2c0 25.9 21 46.9 46.9 46.9l674.2 0c25.9 0 46.9-21 46.9-46.9l0-34.2C896 469 875 448 849.1 448z" p-id="1350"></path></svg>
        </router-link>
        <div>
        <router-link to="/profile">我的</router-link>
        <router-link to="/">发现</router-link>
        <router-link to="/yun-cun">云村</router-link>
        <router-link to="/video">视频</router-link>
        </div>
        <router-link to="/search">
            <svg t="1650613165970"
                 class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2302" width="20" height="20"><path d="M680.728354 651.326209c121.274064-137.208988 116.320239-346.908988-14.939247-478.166427-136.444579-136.433322-357.662913-136.433322-494.094188 0-136.443555 136.442532-136.443555 357.661889 0 494.105445 131.241067 131.253346 340.927763 136.204102 478.149031 14.942317l265.63187 265.63187 30.889521-30.877241L680.728354 651.326209zM649.273968 622.002346l-28.658713 28.668946c-120.345925 105.622596-303.678394 101.031021-418.524049-13.812587-119.651101-119.651101-119.651101-313.648466 0-433.299567C321.742307 83.909062 515.740696 83.909062 635.39282 203.569372 750.211868 318.380234 754.826979 501.656421 649.273968 622.002346z" p-id="2303"></path></svg>
        </router-link>

    </nav>
</template>

<script>
    export default {
        name: "HeaderCom"
    }
</script>

<style scoped lang="less">
nav{display: flex;justify-content: space-between;
    margin-top: 10px;
    div{width: 200px;
        display: flex;
        justify-content: space-between;
        a{color: #000;
          text-decoration: none;/*去下划线*/
        }
        .router-link-active{
            font-weight: bold;
        }
    }
}


</style>