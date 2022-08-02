<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'worpress' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '5{^j[TD(yMH&,~`~~ZY2=x(SA#8/:3Ie_z/Y@ds2qNe$8!;KZuwsr&{F?I(cZEt^' );
define( 'SECURE_AUTH_KEY',  'w9qHbz~&?bDiyOVeoJw{D<8Lzs2on;m{{imW,kr/Aj=yALtGb$SkUXd_~}UPQ^(_' );
define( 'LOGGED_IN_KEY',    '[7W*{N8H!09Qg!g!yJ)F2!)Yqj=_2xjrq@7kK&(<>JFYB/@@?GNS^_wO=&Lg=J=g' );
define( 'NONCE_KEY',        '@;WehzX8|8JSc7Y_AL:S|_&X`@]Z$rUi_zW@O&.-B`:0-dwJ]IE})=H-ZU<[?F;Y' );
define( 'AUTH_SALT',        '=5c6:E/rTs$vpOsJ/DOj3vDhh+p{S]DW~whi_-X^[^Bb>gCsbS%c-*dDyV&sk8wq' );
define( 'SECURE_AUTH_SALT', '@4>{&tMin^AhN>(y$C<nZVb)/!Q&#S4E,xYS&vYO?!O5|!2ju}2rv{Bb0@n/Wg!4' );
define( 'LOGGED_IN_SALT',   'Y!mHYd}2]voCdF11(5j*=OP@=g4;`&ynvnt]=[woR#HA<}GcDe}U}p-*@.$$i3Bh' );
define( 'NONCE_SALT',       '{^9fHK7Envh9 j7ORJBpC{DNi?w$43eGL(ve2QvN&-Qh)|IbRBkgYXoz{Tc3L4-b' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
