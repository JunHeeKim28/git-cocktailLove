package com.rngrad;

import android.bluetooth.BluetoothAdapter;
import android.content.Context;

public class BluetoothUtil {
    public static boolean isBluetoothEnabled(Context context) {
        BluetoothAdapter bluetoothAdapter = BluetoothAdapter.getDefaultAdapter();
        return bluetoothAdapter != null && bluetoothAdapter.isEnabled();
    }
}