const SignUpFormA = () => {
    return ( 
        <>
        <div class="whole">
        <div class="akh-img">
            <img src="AKH_extracts/AKH Design.png" alt="AKH-Design" />
        </div>
        <div class="akh-form">
            <forms id="registration-form">
                <div class="form-group">
                    <label for="last-name">Last Name: </label>
                    <input type="text" name="last-name" id="last-name" required placeholder="Doe" />
                </div>
                <div class="form-group">
                    <label for="first-name">First Name: </label>
                    <input type="text" name="first-name" id="first-name" required placeholder="John" />
                </div>
                <div class="form-group">
                    <label for="email">Email Address</label>
                    <input type="email" name="email" id="email" required placeholder="johndoe@gmail.com" />
                </div>
                <div class="form-group">
                    <label for="phone">Mobile Number</label>
                    <input type="tel" name="phone" id="phone" required placeholder="091987652233" />
                </div>
                <div class="form-group">
                    <label for="dob">Date of Birth: </label>
                    <input type="date" name="dob" id="dob" required  />
                </div>
                <div class="form-group">
                    <label for="gender">Gender </label>
                    <select name="gender" id="gender" required>
                        <option value="">Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="address">Residential Address: </label>
                    <textarea name="address" id="address" cols="30" rows="5" required></textarea>
                </div>
                <div class="form-group">
                    <button>NEXT</button>
                </div>
            </forms>
        </div>
    </div>
        </>
     );
}
 
export default SignUpFormA;