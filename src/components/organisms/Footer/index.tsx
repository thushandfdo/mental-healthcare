import { Button } from '@/components/atoms/Button';
import Input from '@/components/atoms/Input';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

export const Footer = () => (
    <footer className="border-t border-blue-200">
        <div className="max-w-7xl mx-auto py-12 px-4">
            <div className="grid grid-cols-4 gap-16">
                {/* Newsletter Section */}
                <div className="col-span-1">
                    <a href="/" className="text-2xl font-bold text-sky-600 mb-8 block">
                        Logo
                    </a>
                    <p className="text-gray-600 mb-4">
                        Subscribe to our newsletter for the latest features and updates.
                    </p>
                    <div className="space-y-4">
                        <div className="flex gap-2">
                            <Input placeHolder="Your email address" value="" onChange={function (): void {
                                throw new Error('Function not implemented.');
                            } } />
                            <Button label="Join" type="primary" onClick={function (): void {
                                throw new Error('Function not implemented.');
                            } } />
                        </div>
                        <p className="text-sm text-gray-500">
                            By subscribing, you consent to receive updates and agree to our Privacy Policy.
                        </p>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="col-span-1">
                    <h3 className="font-semibold text-gray-900 mb-6">Quick Links</h3>
                    <ul className="space-y-3">
                        <li><a href="#" className="text-gray-600 hover:text-gray-900">About Us</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact Us</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-gray-900">Support Center</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-gray-900">Blog Posts</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-gray-900">FAQs</a></li>
                    </ul>
                </div>

                {/* Connect With Us */}
                <div className="col-span-1">
                    <h3 className="font-semibold text-gray-900 mb-6">Connect With Us</h3>
                    <ul className="space-y-3">
                        <li><a href="#" className="text-gray-600 hover:text-gray-900">Careers</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-gray-900">Partnerships</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-gray-900">Community</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-gray-900">Events</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-gray-900">Resources</a></li>
                    </ul>
                </div>

                {/* Follow Us */}
                <div className="col-span-1">
                    <h3 className="font-semibold text-gray-900 mb-6">Follow Us</h3>
                    <ul className="space-y-3">
                        <li>
                            <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                                <FaFacebook className="w-5 h-5 text-[#1877F2]" />
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                                <FaInstagram className="w-5 h-5 text-[#E4405F]" />
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                                <FaTwitter className="w-5 h-5 text-[#1DA1F2]" />
                                X
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                                <FaLinkedin className="w-5 h-5 text-[#0A66C2]" />
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                                <FaYoutube className="w-5 h-5 text-[#FF0000]" />
                                YouTube
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Section with Copyright and Links */}
            <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex justify-between items-center">
                    <p className="text-gray-500 text-sm">
                        © CodeBell (PVT) Ltd. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-gray-500 text-sm hover:text-gray-900">Privacy Policy</a>
                        <a href="#" className="text-gray-500 text-sm hover:text-gray-900">Terms of Service</a>
                        <a href="#" className="text-gray-500 text-sm hover:text-gray-900">Cookie Settings</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
)
