package com.example.alis_mobile

import android.annotation.SuppressLint
import android.content.Intent
import android.os.Bundle
import android.view.View
import android.widget.EditText
import android.widget.Button
import android.widget.ImageView
import android.widget.LinearLayout
import android.widget.Toast
import androidx.activity.ComponentActivity
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import android.graphics.Color
import androidx.compose.ui.tooling.preview.Preview
import com.example.alis_mobile.ui.theme.AlismobileTheme
import com.google.android.material.bottomnavigation.BottomNavigationView

class BookActivity : ComponentActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.book_screen)

        val homeNav: ImageView = findViewById(R.id.homeNav)
        val compassNav: ImageView = findViewById(R.id.compassNav)
        val profNav: ImageView = findViewById(R.id.profNav)
        val navigate: Button = findViewById(R.id.naviBtn)

        compassNav.setColorFilter(Color.WHITE)

        homeNav.setOnClickListener {
            // Handle homeNav click event
            // Example: Opening HomeActivity
            val intent = Intent(this, RuleActivity::class.java)
            startActivity(intent)
        }

        compassNav.setOnClickListener {
            // Handle compassNav click event
            // Example: Opening CompassActivity
            val intent = Intent(this, BookActivity::class.java)
            startActivity(intent)
        }

        profNav.setOnClickListener {
            // Handle profNav click event
            // Example: Opening ProfileActivity
            val intent = Intent(this, ProfileActivity::class.java)
            startActivity(intent)
        }
        navigate.setOnClickListener{
            val intent = Intent(this, NavActivity::class.java)
            startActivity(intent)
        }
    }
}