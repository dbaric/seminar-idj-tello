# API Reference

The IDJ Tello Remote Control application provides a simple API for controlling the DJI Tello drone programmatically. Below are the available commands and their descriptions:

1. **`takeOff()`**:

   - Initiates takeoff of the drone.

2. **`land()`**:

   - Initiates landing of the drone.

3. **`moveUp(distance)`**:

   - Moves the drone up by the specified distance (in centimeters).

4. **`moveDown(distance)`**:

   - Moves the drone down by the specified distance (in centimeters).

5. **`moveLeft(distance)`**:

   - Moves the drone left by the specified distance (in centimeters).

6. **`moveRight(distance)`\*\***:

   - Moves the drone right by the specified distance (in centimeters).

7. **`moveForward(distance)`**:

   - Moves the drone forward by the specified distance (in centimeters).

8. **`moveBackward(distance)`**:

   - Moves the drone backward by the specified distance (in centimeters).

9. **`rotateClockwise(degrees)`**:

   - Rotates the drone clockwise by the specified angle (in degrees).

10. **`rotateCounterClockwise(degrees)`**:

    - Rotates the drone counter-clockwise by the specified angle (in degrees).

11. **`flip(direction)`**:

    - Performs a flip in the specified direction ('f' for forward, 'b' for backward).

12. **Telemetry Data Requests:**
    - Telemetry data can be requested using the following functions:
      - `requestBattery()`
      - `requestSpeed()`
      - `requestAttitude()`
      - `requestBarometer()`
      - `requestAcceleration()`
      - `requestTof()`
      - `requestWifi()`

Use these commands to control the DJI Tello drone programmatically and retrieve telemetry data as needed.
