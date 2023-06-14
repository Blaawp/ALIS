package com.example.alis_mobile.session
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.RequestBody.Companion.toRequestBody
import org.json.JSONObject
import java.io.IOException


class Session private constructor(){
    companion object {
        @Volatile
        private var instance: Session? = null
        fun getInstance() =
            instance ?: synchronized(this) {
                instance ?: Session().also { instance = it }
            }
    }

    var user: JSONObject? = null
        get() = field

    var JWToken: String? = null
        get() = field

    fun login(email: String, password: String){

        val jsonObject = JSONObject()

        jsonObject.put("email", email);
        jsonObject.put("password", password);


        val client = OkHttpClient()
        val mediaType = "text/plain; charset=utf-8".toMediaType()
        val body = jsonObject.toString().toRequestBody(mediaType)
        val request = Request.Builder()
            .url("https://alis-sti.vercel.app/api/login").post(body)
            .build()

        client.newCall(request).execute().use { response ->
            if (!response.isSuccessful) throw IOException("Unexpected code $response")

            val response = JSONObject(response.body!!.string())
            this.JWToken = response.optString("token")
            this.user = response.optJSONObject("user")
        }
    }

    fun logout(){
        JWToken = null
        user = null
    }


}