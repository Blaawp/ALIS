package com.example.alis_mobile

import android.content.Intent
import android.os.Bundle
import android.widget.EditText
import android.widget.Button
import android.widget.Toast
import androidx.activity.ComponentActivity
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import com.example.alis_mobile.session.Session
import com.example.alis_mobile.ui.theme.AlismobileTheme
import java.lang.Exception

class MainActivity : ComponentActivity() {

    private lateinit var usernameEditText: EditText
    private lateinit var passwordEditText: EditText
    private lateinit var loginButton: Button

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.login_screen)

        usernameEditText = findViewById(R.id.etUsername)
        passwordEditText = findViewById(R.id.etPassword)
        loginButton = findViewById(R.id.btnLogin)

        loginButton.setOnClickListener {
            val username = usernameEditText.text.toString() + "@sti.edu.ph"
            val password = passwordEditText.text.toString()

            placeholderLogin(username, password)
        }
    }

    private fun switchDestinationRules() {
        val intent = Intent(this, AppActivity::class.java)
        startActivity(intent)
    }
    private fun placeholderLogin(username: String, password: String) {
//        val expectedUsername = "temp"
//        val expectedPassword = "password"
//
//        if (username == expectedUsername && password == expectedPassword) {
//            switchDestinationRules()
//        } else {
//            // Login failed
//            Toast.makeText(this, "Login failed", Toast.LENGTH_SHORT).show()
//        }

        Thread {

            try{
                Session.getInstance().login(username, password)
                runOnUiThread{
                    switchDestinationRules()
                    usernameEditText.setText("")
                    passwordEditText.setText("")
                }
            }
            catch (e: Exception){
                runOnUiThread{
                    Toast.makeText(this, "Login failed", Toast.LENGTH_SHORT).show()
                }
            }

        }.start()
    }
}

@Composable
fun Greeting(name: String, modifier: Modifier = Modifier) {
    Text(
        text = "Hello $name!",
        modifier = modifier
    )
}

@Preview(showBackground = true)
@Composable
fun GreetingPreview() {
    AlismobileTheme {
        Greeting("Android")
    }
}