package com.example.alis_mobile

import android.annotation.SuppressLint
import android.content.Intent
import android.graphics.Color
import android.os.Bundle
import android.widget.EditText
import android.widget.Button
import android.widget.ImageView
import android.widget.LinearLayout
import android.widget.Toast
import androidx.activity.ComponentActivity
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import com.example.alis_mobile.ui.theme.AlismobileTheme
import com.google.android.material.bottomnavigation.BottomNavigationView

class RuleActivity : ComponentActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.rule_screen)

        val homeNav: ImageView = findViewById(R.id.homeNav)
        val compassNav: ImageView = findViewById(R.id.compassNav)
        val profNav: ImageView = findViewById(R.id.profNav)

        homeNav.setColorFilter(Color.WHITE)

        homeNav.setOnClickListener {
            // Handle homeNav click event
            // Example: Opening HomeActivity
            val intent = Intent(this, RuleActivity::class.java)
            startActivity(intent)
        }

        compassNav.setOnClickListener {
            // Handle compassNav click event
            // Example: Opening CompassActivity
            val intent = Intent(this, ExploreActivity::class.java)
            startActivity(intent)
        }

        profNav.setOnClickListener {
            // Handle profNav click event
            // Example: Opening ProfileActivity
            val intent = Intent(this, ProfileActivity::class.java)
            startActivity(intent)
        }
    }
}